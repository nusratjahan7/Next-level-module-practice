import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/product.service";
import type { IProduct } from "../types/poduct";
import { bodyParser } from "../utils/parseBody";

const productController = async (req: IncomingMessage, res: ServerResponse) => {
    // Products : GET, PUT, POST

    const url = req.url;
    const method = req.method;
    // console.log(url);
    const urlParams = url?.split("/");
    // console.log(urlParams);
    const id =
        urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;

    // console.log(id);

    // Get all products
    if (url === "/products" && method === "GET") {
        // const products = [
        //     {
        //         id: 1,
        //         name: "Product-1",
        //         price: 200,
        //     },
        //     {
        //         id: 2,
        //         name: "Product-2",
        //         price: 230,
        //     },
        // ];
        const products = productService();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Products retrived sucessfully!",
                data: products,
            }),
        );
    } else if (method === "GET" && id !== null) {
        const products = productService();
        const product = products.find((p: IProduct) => p.id == id);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Product retrived sucessfully!",
                data: product,
            }),
        );
    } else if (method === "POST" && url === "/products") {
        //"abc" => "a", "b", "c" => "abc"
        const body = await bodyParser(req);
        // console.log(body);

        const newProduct = {
            id: Date.now(),
            ...body,
        };

        // console.log(newProduct);

        const products = productService();

        products.push(newProduct);

        createProduct(products);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Product created successfully!",
                // data: product,
            }),
        );
    }
};

export default productController;
