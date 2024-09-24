import catalyst from "zcatalyst-sdk-node";

export class DatastoreService {
    private app: any;
    private tableName: string;

    constructor(req: any, tableName: string){
        this.app = catalyst.initialize(req);
        this.tableName = tableName
    }

    public async getAllInfo(): Promise<any[]>{
        try{
            const datastore = this.app.datastore();
            const table = datastore.table(this.tableName)

            const rows = await table.getAllRows();
            return rows
        }catch(err){
            console.error('Error al obtener los registros:', err);
            throw new Error('Error al obtener los registros de Datastore');
        }
    }
}


