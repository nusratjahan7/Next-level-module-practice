import express, {
    type Application,
    type Request,
    type Response,
} from "express";

import { Pool } from "pg";

const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
    connectionString: process.env.DATABASE_URL_POOLED,
});

const initDB = async () => {
    try {
        await pool.query(`
            CREATE TABLE users (
            id  SERIAL PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            age INT,
            is_Active BOOLEAN DEFAULT true,

            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
            );
        `);
        console.log("Database connected!!");
    } catch (error) {
        console.log(error);
    }
};

initDB();

// console.log(pool);

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
    const { name, age, password } = req.body;
    // console.log(password);
    // console.log("POST request body:", body);
    res.status(200).json({
        success: true,
        message: "This a test api!!",
        data: { name, age },
    });
});

app.listen(port, () => {
    console.log(`The Express server is running on the port ${port}`);
});
