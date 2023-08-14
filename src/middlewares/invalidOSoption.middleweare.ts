import { NextFunction, Request, Response } from "express";
import { InfoResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors/App.errors";

export const invalidOS = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const OS = req.body.preferredOS;

  if (OS == "Windows" || OS == "MacOS" || OS == "Linux") {
    return next();
  }

  throw new AppError("Invalid OS option.", 400);
};
