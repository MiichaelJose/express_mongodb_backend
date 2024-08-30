import { Data } from "./methods-interface";
import { Collaborator } from "../schemas/collaborator";

export class CollaboratorService implements Data {
    async fetch(id: string): Promise<any> {
       return await Collaborator.findById(id)
    }

    async fetchAll(): Promise<any> {
        return await Collaborator.find()
    }

    async create(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async update(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}