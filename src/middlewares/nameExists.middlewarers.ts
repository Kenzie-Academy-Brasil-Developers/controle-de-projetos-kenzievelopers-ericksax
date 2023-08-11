import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { DeveloperResult } from "../interfaces";
import { AppError } from "../errors/App.errors";

export const nameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.name) next();

  const queryString: string =
    'SELECT "name" FROM "developers" WHERE "name" = $1;';
  const queryResult: DeveloperResult = await client.query(queryString, [
    req.body.name,
  ]);

  if (queryResult.rowCount) {
    throw new AppError("Name already exists.", 409);
  }
};
