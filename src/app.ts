import express, { Application } from "express";
import { DeveloperRoutes } from "./routes";

const app: Application = express();

app.use("/developers", DeveloperRoutes)

export default app;
