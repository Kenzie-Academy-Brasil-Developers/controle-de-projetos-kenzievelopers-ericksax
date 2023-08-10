import { Router } from "express";
import  developerController  from "../controllers";

export const DeveloperRoutes = Router()

DeveloperRoutes.get("", developerController.read)