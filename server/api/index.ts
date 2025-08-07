import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import useRoute from "./user/user";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", useRoute);

app.get("/api/message", (req: Request, res: Response) => {
    res.send("Hello from the application API!");
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
