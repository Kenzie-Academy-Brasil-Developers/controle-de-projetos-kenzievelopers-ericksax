import { Router } from "express";
import { developerControllers } from "../controllers";

export const developerRoutes = Router()

developerRoutes.post("", developerControllers.create)