import { Request, Response } from "express";
import { DataController } from "./methods-interface";
import { CollaboratorService } from "../services/collaborator-service";

export class CollaboratorController implements DataController {
    async fetch(req: Request, resp: Response): Promise<any> {
        try {
            const collaborator = await new CollaboratorService().fetch(req.params.id)
            resp.status(200).send(collaborator)
        } catch (error) {
            resp.status(404).send(error) 
        }
    }
    
    async fetchAll(req: Request, resp: Response): Promise<any> {
        try {
            const collaborator = await new CollaboratorService().fetch(req.params.id)
            resp.status(200).send(collaborator)
        } catch (error) {
            resp.status(404).send(error) 
        }
    }

    async create(req: Request, resp: Response ): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async delete(req: Request, resp: Response): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async update(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}