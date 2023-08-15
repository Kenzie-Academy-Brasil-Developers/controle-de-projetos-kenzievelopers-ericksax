import { NextFunction, Request, Response } from "express";
import { client } from "../database";

import { AppError } from "../errors/App.errors";
import { InfoResult } from "../interfaces";

export const infoExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const queryString: string = 'SELECT * FROM "developerInfos" WHERE "id" = $1;';
  const queryResult: InfoResult = await client.query(queryString, [
    req.params.id,
  ]);

  if (queryResult.rowCount) {
    throw new AppError("Developer infos already exists.", 409);
  }

  return next();
};
