import { Pool } from "pg";

const isVercel = !!process.env.VERCEL;

export const pool = isVercel
    ? new (require("@neondatabase/serverless").Pool)({
          connectionString: process.env.DATABASE_URL,
      })
    : new Pool({
          connectionString: process.env.DATABASE_URL,
      });
