import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { DeveloperResult } from "../interfaces";
import { AppError } from "../errors/App.errors";

export const emailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.body.email) return next();

  const queryString: string = 'SELECT * FROM "developers" WHERE "email" = $1;';
  const queryResult: DeveloperResult = await client.query(queryString, [
    req.body.email,
  ]);

  if (queryResult.rowCount) {
    throw new AppError("Email already exists.", 409);
  }

  return next();
};
