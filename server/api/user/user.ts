import { Router } from "express";
import { pool } from "../db";

interface UserCount {
    count: number;
}

const router = Router();

router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT COUNT(*) FROM users");
        const userCount: UserCount = {
            count: parseInt(result.rows[0].count, 10),
        };
        res.json(userCount);
    } catch (error) {
        console.error("DB query error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
