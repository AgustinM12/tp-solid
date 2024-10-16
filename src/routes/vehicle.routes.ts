import { Router } from "express";
import { VehicleController } from "../controllers/Vehicle.controllers"
import { VehicleService } from "../services/Vehicle.services"
import { MongoDBVehicleRepository } from "../db/MongoDB/MongoDB.Vehicle"
import { PostgresVehicleRepository } from "../db/PostgresSQL/PostgresSQL.vehicle"
import { ExtendedVehicleService } from "../newImplementation/ExtendVehicleService"

const router = Router()

const vehicleMongoRepository = new MongoDBVehicleRepository();
const vehiclePostgresRepository = new PostgresVehicleRepository();

// ! const vehicleService = new VehicleService(vehiclePostgresRepository);
const vehicleService = new ExtendedVehicleService(vehicleMongoRepository);
const vehicleController = new VehicleController(vehicleService);

vehicleController

router.get("/vehicle/:id", vehicleController.find)
router.post("/vehicle", vehicleController.create)
router.put("/vehicle/:id", vehicleController.update)
router.put("/price/:id", vehicleController.applyDiscount)
router.delete("/vehicle/:id", vehicleController.delete)

export default router