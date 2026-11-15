import {
    createServer,
    IncomingMessage,
    METHODS,
    Server,
    ServerResponse,
} from "http";
import { json } from "stream/consumers";

const server: Server = createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        // console.log("Request: ", req);
        // console.log("responese", res);
        // console.log(req.url);
        // console.log(req.method);
        const url = req.url; //* "/", "/products", "/courses"
        const method = req.method; //* "GET", "POST"

        if (url === "/" && method === "GET") {
            // console.log("this is root route");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "This is root route!!" }));
        } else if (url?.startsWith("/products")) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "This is products route!!" }));
        } else {
            // console.log("this route is not defined");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "This route is not defined" }));
        }
    },
);

server.listen(5000, () => {
    console.log("Server is running!!");
});
