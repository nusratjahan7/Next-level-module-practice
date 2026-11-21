import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/product.service";
import type { IProduct } from "../types/poduct";
import { bodyParser } from "../utils/parseBody";
import { sendResponse } from "../utils/sendResponse";

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
        try {
            const products = productService();
            sendResponse(
                res,
                true,
                200,
                "Product retrived sucessfully!",
                products,
            );
        } catch (error) {
            sendResponse(res, false, 500, "Internal Server Error");
        }
    } else if (method === "GET" && id !== null) {
        try {
            const products = productService();
            const product = products.find((p: IProduct) => p.id == id);

            if (!product) {
                return sendResponse(res, false, 404, "Product not found!");
            }
            sendResponse(
                res,
                true,
                200,
                "Product retrived sucessfully!",
                product,
            );
        } catch (error) {
            sendResponse(res, false, 500, "Internal Server Error");
        }
    } else if (method === "POST" && url === "/products") {
        try {
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
            sendResponse(res, true, 201, "Product created successfully!");
        } catch (error) {
            sendResponse(res, false, 500, "Internal Server Error");
        }
    } else if (method === "PUT" && id !== null) {
        try {
            const body = await bodyParser(req);

            const products = productService();

            const index = products.findIndex((p: IProduct) => p.id === id);

            // console.log(index);

            if (index < 0) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "Product Not Found!",
                    }),
                );
            }

            // console.log(products[index]);

            products[index] = { id: products[index].id, ...body };

            createProduct(products);
            sendResponse(res, true, 200, "Product Updated ", products[index]);
        } catch (error) {
            sendResponse(res, false, 500, "Internal Server Error");
        }
    } else if (method === "DELETE" && id !== null) {
        try {
            const products = productService();

            const index = products.findIndex((p: IProduct) => p.id === id);

            // console.log(index);

            if (index < 0) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "Product Not Found!",
                    }),
                );
            }

            products.splice(index, 1);

            createProduct(products);
            sendResponse(res, true, 200, "Product Deleted successfully!");
        } catch (error) {
            sendResponse(res, false, 500, "Internal Server Error");
        }
    }
};

export default productController;
