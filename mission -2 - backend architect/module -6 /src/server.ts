import {
    createServer,
    IncomingMessage,
    METHODS,
    Server,
    ServerResponse,
} from "http";
import { json } from "stream/consumers";
import routeHandler from "./routes/route";
import config from "./config";

const server: Server = createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        // console.log("Request: ", req);
        // console.log("responese", res);
        // console.log(req.url);
        // console.log(req.method);
        routeHandler(req, res);
    },
);

server.listen(config, () => {
    console.log(`server is running on the port ${config.port}`);
});
