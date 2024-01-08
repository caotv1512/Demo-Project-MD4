import express, { Express } from "express";
import dotenv from "dotenv";
import  userRouter from "./routes/user.route";

dotenv.config();

const app: Express = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Express + TypeScript with my Class');
});

app.use(express.json());
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
