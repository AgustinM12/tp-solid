import { IClientRepository } from "../../repository/Client.repository";
import { IClient } from "../../models/Client.model";

export class MongoDBClientRepository implements IClientRepository {
    private clients: IClient[] = []

    async create(client: IClient): Promise<IClient> {
        this.clients.push(client)
        return client;
    }

    async findById(id: string): Promise<IClient | null> {
        const client: IClient | undefined = this.clients.find((client) => client.id === id)
        return client || null;
    }

    async update(id: string, client: Partial<IClient>): Promise<IClient | null> {
        const clientIndex = this.clients.findIndex((c) => c.id === id);

        if (clientIndex === -1) {
            return null;
        }

        const updatedClient = { ...this.clients[clientIndex], ...client };

        this.clients[clientIndex] = updatedClient;

        return updatedClient;
    }

    async delete(id: string): Promise<void> {
        this.clients.filter(client => client.id === id)
        return 
    }
}
