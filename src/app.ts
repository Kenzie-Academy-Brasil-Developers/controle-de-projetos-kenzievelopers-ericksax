import "express-async-errors"
import express, { Application } from "express";
import { developerRoutes } from "./routes";
import { handleErrors } from "./middlewares/handleError.middlewarers";

const app: Application = express();
app.use(express.json())

app.use("/developers", developerRoutes)

app.use(handleErrors)

export default app;
