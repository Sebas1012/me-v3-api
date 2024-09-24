import { DataStoreRepository } from "../domain/interfaces/dataStore.repository";
import { ProjectModel } from "../domain/models/project.model";

export class GetAllInfoUseCase {
    private datastoreRepository: DataStoreRepository;
  
    constructor(datastoreRepository: DataStoreRepository) {
      this.datastoreRepository = datastoreRepository;
    }
  
    public async execute(): Promise<ProjectModel[]> {
      return this.datastoreRepository.getAllInfo();
    }
  }