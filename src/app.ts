import cors from 'cors';
import express, { Request, Response, json, NextFunction } from 'express';
import battleRouter from "./routers/battleRouter.js";

const app = express();
const PORT = 5000;
app.use(json());
app.use(cors());
app.use(battleRouter);
app.use((error, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    if (error.response) {
        return res.sendStatus(error.response.status);
    }
    res.sendStatus(500);
});

app.listen(PORT, () => {
    console.log(`Working and running on port ${PORT}!`);
});


