import "express-async-errors"
import express, { Application } from "express";
import { developerRoutes } from "./routes";
import { handleErrors } from "./middlewares/handleError.middlewarers";
import {projectsRoutes }from "./routes";

const app: Application = express();
app.use(express.json())

app.use("/developers", developerRoutes)
app.use("/projects", projectsRoutes)

app.use(handleErrors)

export default app;
