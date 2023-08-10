import { Request, Response } from "express"
import { developerService } from "../services"


const read = async(req: Request, res: Response): Promise<Response> => {
    const developers = await developerService.read()
    return res.status(200).json(developers)
}

export  { read }