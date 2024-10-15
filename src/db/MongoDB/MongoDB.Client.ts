import { IClientRepository } from "../../repository/Client";
import { IClient } from "../../models/Client.model";

export class MongoDBClientRepository implements IClientRepository {
    async create(client: IClient): Promise<IClient> {
        return client;
    }

    async findById(id: string): Promise<IClient | null> {
        return null;
    }

    async update(id: string, client: Partial<IClient>): Promise<IClient | null> {
        return null;
    }

    async delete(id: string): Promise<void> {
    }
}
