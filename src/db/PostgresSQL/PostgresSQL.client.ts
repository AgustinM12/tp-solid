
import { IClientRepository } from "../../repository/Client";
import { IClient } from "../../models/Client.model";

export class MongoDBVehicleRepository implements IClientRepository {
    async create(vehicle: IClient): Promise<IClient> {
        return vehicle; 
    }

    async findById(id: string): Promise<IClient | null> {
        return null;
    }

    async update(id: string, vehicle: Partial<IClient>): Promise<IClient | null> {
        return null;
    }

    async delete(id: string): Promise<void> {
    }
}
