import { Request, Response } from "express";
import { Infos } from "../interfaces";
import infosService from "../services/infos.service";

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload = {
        ...req.body,
        developerId: req.params.id
    }
  const infos: Infos = await infosService.create(payload);
  return res.status(201).json(infos);
};

export default { create }