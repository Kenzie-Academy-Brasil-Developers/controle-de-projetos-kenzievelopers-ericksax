import { Request, Response } from "express";
import { projectServices } from "../services";
import { Project } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const project: Project = await projectServices.create(req.body);
  return res.status(201).json(project);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const developer: Project = await projectServices.read(req.params.id);
  return res.status(200).json(developer);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const developer: Project = await projectServices.retrieve(req.params.id);
  return res.status(200).json(developer);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const developer: Project = await projectServices.partialUpdate(
    req.params.id,
    req.body
  );
  return res.status(200).json(developer);
};

export default { create, read, update, retrieve };
