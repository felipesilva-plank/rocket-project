import { DeepPartial, Entity, EntityTarget, FindOptions, Repository } from "typeorm"
import AppDataSource from "../../data-source"

export interface IBaseRepository<T> {
    getAll(): Promise<T[]>
    getById(id: number): Promise<T>
    create(t: DeepPartial<T>): Promise<T>
    update(id: number, t: Partial<T>): Promise<T>
    deleteById(id: number): Promise<T>
}


export abstract class BaseRepository<T> implements IBaseRepository<T>{
    protected repository: Repository<T>;

    constructor(obj: EntityTarget<T>){
        this.repository = AppDataSource.getRepository(obj);
    }

    async getAll(): Promise<T[]> {
        return await this.repository.find();
    }

    async getById(id: number): Promise<T> {
        const obj = await this.repository.findOneBy({id} as any);
        return obj;
    }

    async deleteById(id: number): Promise<T>{
        const obj = this.getById(id);
        await this.repository.delete(id);
        return obj;
    }

    async create(obj: T | DeepPartial<T>): Promise<T>{
        const newObj = this.repository.create(obj);
        await this.repository.save(newObj);
        return newObj;
    }

    async update(id: number, obj: Partial<T>): Promise<T> {
        const tmpObj = await this.getById(id);
        const updatedObj = Object.assign(tmpObj, obj);
        await this.repository.save(updatedObj);
        return updatedObj;    
   }
}