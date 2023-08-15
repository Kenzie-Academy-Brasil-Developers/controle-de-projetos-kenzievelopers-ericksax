import { Router } from "express";
import { developerControllers, infoControllers } from "../controllers";
import developerMiddlewarers from "../middlewares";
import infoMiddlewares from "../middlewares";
export const developerRoutes = Router();

developerRoutes.post(
  "",
  developerMiddlewarers.emailExists,
  developerControllers.create
);

developerRoutes.use("/:id", developerMiddlewarers.idExists);

developerRoutes.get("/:id", developerControllers.retrieve);
developerRoutes.patch(
  "/:id",
  developerMiddlewarers.emailExists,
  developerControllers.update
);
developerRoutes.delete("/:id", developerControllers.destroy);

developerRoutes.post(
  "/:id/infos",
  developerMiddlewarers.invalidOS,
  infoMiddlewares.infoExists,
  infoControllers.create
);
