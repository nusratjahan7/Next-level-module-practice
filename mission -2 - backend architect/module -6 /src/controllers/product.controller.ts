import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
    // Products : GET, PUT, POST

    const url = req.url;
    const method = req.method;

    if (url === "/products" && method === "GET") {
        const products = [
            {
                id: 1,
                name: "Product-1",
                price: 200,
            },
            {
                id: 2,
                name: "Product-2",
                price: 230,
            },
        ];
        productService();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Products retrived sucessfully!",
                data: products,
            }),
        );
    }
};

export default productController;
