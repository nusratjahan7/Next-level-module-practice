import express, {
    type Application,
    type Request,
    type Response,
} from "express";
const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    // console.log(req);
    // res.send("This is root route!");
    res.status(200).json({
        success: true,
        message: "This is root route!",
        author: "PH",
    });
});

app.post("/", async (req: Request, res: Response) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`The Express server is running on the port ${port}`);
});
