import { Request, Response } from "express";
import { developerService } from "../services";
import { Developer } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const developer: Developer = await developerService.create(req.body);
  return res.status(201).json(developer);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const developer: Developer = await developerService.read(req.params.id);
  return res.status(200).json(developer);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const developer: Developer = await developerService.retrieve(req.params.id);
  return res.status(200).json(developer);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const developer: Developer = await developerService.partialUpdate(req.params.id, req.body);
  return res.status(200).json(developer);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await developerService.destroy(req.params.id);
  return res.status(204).json()
};

export default { create, read, update, destroy, retrieve};
