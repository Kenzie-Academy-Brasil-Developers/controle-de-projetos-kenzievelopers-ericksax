import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { Developer, DeveloperResult } from "../interfaces";
import { AppError } from "../errors/App.errors";

export const idExists = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    
    const queryString: string = 'SELECT * FROM "developers" WHERE "id" = $1;'
    const queryResult: DeveloperResult = await client.query(queryString, [req.params.id])

    if(!queryResult.rowCount) {
        throw new AppError('Developer not found.', 404)
    }

    const foundDeveloper: Developer = queryResult.rows[0]
    res.locals = {...res.locals, foundDeveloper}

    return next()
  };
  