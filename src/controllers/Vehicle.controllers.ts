import { ExtendedVehicleService } from "../newImplementation/ExtendVehicleService";
import { VehicleService } from "../services/Vehicle.services";

import { Request, Response } from "express";

export class VehicleController {
    constructor(private vehicleService: ExtendedVehicleService) { }

    create = async (req: Request, res: Response) => {
        const vehicle = await this.vehicleService.createVehicle(req.body);
        res.status(201).json(vehicle);
    }

    find = async (req: Request, res: Response) => {
        const vehicle = await this.vehicleService.findVehicleById(req.params.id);
        res.json(vehicle);
    }

    update = async (req: Request, res: Response) => {
        const vehicle = await this.vehicleService.updateVehicle(req.params.id, req.body);
        res.json(vehicle);
    }

    delete = async (req: Request, res: Response) => {
        await this.vehicleService.deleteVehicle(req.params.id);
        res.status(204).send();
    }

    applyDiscount = async (req: Request, res: Response) => {
        const updatedVehicle = await this.vehicleService.applyDiscount(req.params.id, req.body);
        res.status(201).json(updatedVehicle);
    }
}
