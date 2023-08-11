import { Request, Response } from "express";
import { developerService } from "../services";
import { Developer } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const developer: Developer = await developerService.create(req.body);
  return res.status(201).json(developer);
};

export default { create };
