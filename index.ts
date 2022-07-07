import express, { Request, Response } from 'express';

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
    res.send("I'm working!");
});

app.listen(port, () => {
    console.log(`Running on port ${port}!`);
});