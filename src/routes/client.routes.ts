import { Router } from "express";
import { ClientController } from "../controllers/Client.controllers"
import { ClientService } from "../services/Client.services"
import { MongoDBClientRepository } from "../db/MongoDB/MongoDB.Client"
import { PostgresSQLVehicleRepository } from "../db/PostgresSQL/PostgresSQL.client"

const router = Router()

const clientMongoRepository = new MongoDBClientRepository();
const clientPostgresRepository = new PostgresSQLVehicleRepository();

const clientService = new ClientService(clientMongoRepository);
const clientController = new ClientController(clientService);

router.get("/client/:id", clientController.find)
router.post("/client", clientController.create)
router.put("/client/:id", clientController.update)
router.delete("/client/:id", clientController.delete)

export default router