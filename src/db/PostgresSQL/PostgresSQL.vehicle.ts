import { IVehicleRepository } from "../../repository/Vehicle.repository";
import { IVehicle } from "../../models/Vehicle.model";

export class PostgresVehicleRepository implements IVehicleRepository {
    private vehicles: IVehicle[] = []

    async create(client: IVehicle): Promise<IVehicle> {
        this.vehicles.push(client)
        return client;
    }

    async findById(id: string): Promise<IVehicle | null> {
        const client: IVehicle | undefined = this.vehicles.find((client) => client.id === id)
        return client || null;
    }

    async update(id: string, client: Partial<IVehicle>): Promise<IVehicle | null> {
        const clientIndex = this.vehicles.findIndex((c) => c.id === id);

        if (clientIndex === -1) {
            return null;
        }

        const updatedClient = { ...this.vehicles[clientIndex], ...client };

        this.vehicles[clientIndex] = updatedClient;

        return updatedClient;
    }

    async delete(id: string): Promise<void> {
        this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
        return;
    }
}
