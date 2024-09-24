import { Request, Response } from 'express';
import { ProjectController } from './infraestructure/controllers/controller';

const projectController = new ProjectController()

export const handler = async (req: Request, res: Response): Promise<void> => {
    await projectController.getInfo(req, res);
};