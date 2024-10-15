import { IVehicleRepository } from "../../repository/Vehicle.repository";
import { IVehicle } from "../../models/Vehicle.model";

export class PostgresVehicleRepository implements IVehicleRepository {
    async create(vehicle: IVehicle): Promise<IVehicle> {
        return vehicle;
    }

    async findById(id: string): Promise<IVehicle | null> {
        return null;
    }

    async update(id: string, vehicle: Partial<IVehicle>): Promise<IVehicle | null> {
        return null;
    }

    async delete(id: string): Promise<void> {
    }
}
