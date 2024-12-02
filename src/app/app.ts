import express, { Application, Request, Response } from 'express';
const app: Application = express();
const port = 3000;
import cors from 'cors';

//parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world and this is new bangladesh');
});

export default app;
