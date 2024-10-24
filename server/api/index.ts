import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello from the application API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
