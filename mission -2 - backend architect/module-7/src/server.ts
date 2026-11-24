import express, {
    type Application,
    type Request,
    type Response,
} from "express";

import { Pool, Result } from "pg";

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
            CREATE TABLE IF NOT EXISTS users (
            id  SERIAL PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255) UNIQUE NOT NULL,
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

//* create user

app.post("/api/v1/users", async (req: Request, res: Response) => {
    try {
        const { name, email, password, age } = req.body;
        // console.log(password);
        // console.log("POST request body:", body);

        const result = await pool.query(
            `
        INSERT INTO users (name, email, password, age)
        VALUES ($1, $2, $3, $4) RETURNING *
        `,
            [name, email, password, age],
        );
        // console.log(result);
        res.status(201).json({
            success: true,
            message: "User created!!",
            data: result.rows[0],
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error?.message,
            error: error,
        });
    }
});

//* show all users

app.get("/api/v1/users", async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`SELECT * FROM users`);
        res.status(200).json({
            success: true,
            message: "User retrived successfully!!",
            data: result.rows,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error?.message,
            error: error,
        });
    }
});

//* show user by id

// req.url => /prod/123
app.get("/api/v1/users/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `
            SELECT * FROM users
            WHERE id = $1;
        `,
            [id],
        );
        // console.log(result);
        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "User Not Found",
            });
        }

        res.status(200).json({
            success: true,
            message: "User retrived successfully!!",
            data: result.rows[0],
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error?.message,
            error: error,
        });
    }
});

//* update user

app.put("/api/v1/users/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, password, age, is_Active } = req.body;
        const result = await pool.query(
            `
            UPDATE users 
            SET
            name = COALESCE($1, name),
            password = COALESCE($2, password),
            age = COALESCE($3, age),
            is_Active = COALESCE($4, is_Active)
            WHERE id = $5 RETURNING *
            `,
            [
                name ?? null,
                password ?? null,
                age ?? null,
                is_Active ?? null,
                id,
            ],
        );
        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "User Not Found",
            });
        }
        // console.log(result);
        res.status(200).json({
            success: true,
            message: "User update successfully!!",
            data: result.rows[0],
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error?.message,
            error: error,
        });
    }
});

//* Delete User

app.delete("/api/v1/users/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            `
            DELETE FROM users WHERE id=$1
            `,
            [id],
        );
        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "User Not Found",
            });
        }
        res.status(200).json({
            success: true,
            message: "User Deleted successfully!!",
            // data: result.rows[0],
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error?.message,
            error: error,
        });
    }
});

app.listen(port, () => {
    console.log(`The Express server is running on the port ${port}`);
});
