import { VehicleService } from "../services/Vehicle.services";
import { Request, Response } from "express";

export class VehicleController {
    constructor(private vehicleService: VehicleService) {}

    async create(req: Request, res: Response) {
        const vehicle = await this.vehicleService.createVehicle(req.body);
        res.status(201).json(vehicle);
    }

    async find(req: Request, res: Response) {
        const vehicle = await this.vehicleService.findVehicleById(req.params.id);
        res.json(vehicle);
    }

    async update(req: Request, res: Response) {
        const vehicle = await this.vehicleService.updateVehicle(req.params.id, req.body);
        res.json(vehicle);
    }

    async delete(req: Request, res: Response) {
        await this.vehicleService.deleteVehicle(req.params.id);
        res.status(204).send();
    }
}
