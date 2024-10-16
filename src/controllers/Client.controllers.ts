
import { ClientService } from "../services/Client.services";
import { Request, Response } from "express";

export class ClientController {
    constructor(private clientService: ClientService) {
        // Enlazar las funciones al contexto de la clase
        this.create = this.create.bind(this);
        this.find = this.find.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async create(req: Request, res: Response) {
        const client = await this.clientService.createClient(req.body);
        res.status(201).json(client);
    }

    async find(req: Request, res: Response) {
        const client = await this.clientService.findClientById(req.params.id);
        res.json(client);
    }

    async update(req: Request, res: Response) {
        const client = await this.clientService.updateClient(req.params.id, req.body);
        res.json(client);
    }

    async delete(req: Request, res: Response) {
        await this.clientService.deleteClient(req.params.id);
        res.status(204).send();
    }
}
