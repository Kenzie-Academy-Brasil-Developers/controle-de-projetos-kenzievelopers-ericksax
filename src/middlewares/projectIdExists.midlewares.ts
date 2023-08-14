import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { Project, ProjectResult } from "../interfaces";
import { AppError } from "../errors/App.errors";

export const projectExists = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    
    const queryString: string = 'SELECT * FROM "projects" WHERE "id" = $1;'
    const queryResult: ProjectResult = await client.query(queryString, [req.params.id])

    if(!queryResult.rowCount) {
        throw new AppError('Project not found.', 404)
    }

    const foundProject: Project = queryResult.rows[0]
    res.locals = {...res.locals, foundProject}

    return next()
  };
  