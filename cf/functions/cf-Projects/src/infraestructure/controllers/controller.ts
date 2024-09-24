import { Request, Response } from 'express';
import { GetAllInfoUseCase } from '../../application/GetAllInfo.useCase';
import { DatastoreService } from '../services/dataStore.service';
import { envs } from '../../common/configs/envs';

export class ProjectController{
    public async getInfo(req: Request, res: Response): Promise<void>{
        const tableName = envs.dataStoreTableName;

        const dataStoreService = new DatastoreService(req, tableName);
        const getAllInfoUseCase = new GetAllInfoUseCase(dataStoreService);

        try{
            const info = await getAllInfoUseCase.execute();

            res.status(200).json(info)
        }catch(err){
            res.status(500).json({ error: 'No se pudieron obtener los registros' });
        }
    }
}