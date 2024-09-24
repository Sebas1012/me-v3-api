import { ProjectModel } from "../models/project.model";

export interface DataStoreRepository {
    getAllInfo(): Promise<ProjectModel[]>;
}