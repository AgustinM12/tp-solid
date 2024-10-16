import { IVehicleRepository } from "../repository/Vehicle.repository";
import { IVehicle } from "../models/Vehicle.model";

export class VehicleService {
    constructor(private vehicleRepository: IVehicleRepository) {}

    async createVehicle(vehicle: IVehicle): Promise<IVehicle> {
        return await this.vehicleRepository.create(vehicle);
    }

    async findVehicleById(id: string): Promise<IVehicle | null> {
        return await this.vehicleRepository.findById(id);
    }

    async updateVehicle(id: string, vehicle: Partial<IVehicle>): Promise<IVehicle | null> {
        return await this.vehicleRepository.update(id, vehicle);
    }

    async deleteVehicle(id: string): Promise<void> {
        await this.vehicleRepository.delete(id);
    }
}
