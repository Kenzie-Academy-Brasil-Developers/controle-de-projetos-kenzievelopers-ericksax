import { Router } from "express";
import { projectControllers } from "../controllers";
import developerMiddlewarers from "../middlewares";
import projectMiddlewares from "../middlewares";
export const projectsRoutes = Router();

projectsRoutes.post(
  "",
  developerMiddlewarers.developerIdExists,
  projectControllers.create
);

projectsRoutes.use("/:id", projectMiddlewares.projectExists);

projectsRoutes.get("/:id", projectControllers.retrieve);
projectsRoutes.patch(
  "/:id",
  developerMiddlewarers.developerIdExists,
  projectControllers.update
);
