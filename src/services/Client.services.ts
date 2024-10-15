import { IClientRepository } from "../repository/Client";
import { IClient } from "../models/Client.model";

export class ClientService {
    constructor(private clientRepository: IClientRepository) {}

    async createClient(client: IClient): Promise<IClient> {
        return await this.clientRepository.create(client);
    }

    async findClientById(id: string): Promise<IClient | null> {
        return await this.clientRepository.findById(id);
    }

    async updateClient(id: string, client: Partial<IClient>): Promise<IClient | null> {
        return await this.clientRepository.update(id, client);
    }

    async deleteClient(id: string): Promise<void> {
        await this.clientRepository.delete(id);
    }
}
