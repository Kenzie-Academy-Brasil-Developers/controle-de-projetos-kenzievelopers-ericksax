import express, { Application } from "express";
import { developerRoutes } from "./routes";

const app: Application = express();

app.use("/developers", developerRoutes)

export default app;
