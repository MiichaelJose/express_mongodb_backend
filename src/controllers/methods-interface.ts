import { Request, Response } from "express"

export interface DataController {
    fetch(req: Request, resp: Response): Promise<any>
    fetchAll(req: Request, resp: Response): Promise<any>
    create(req: Request, resp: Response): Promise<any>
    delete(req: Request, resp: Response): Promise<any>
    update(req: Request, resp: Response): Promise<any>
}