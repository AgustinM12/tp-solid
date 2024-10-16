import { VehicleService } from "../services/Vehicle.services";
import { IVehicle } from "../models/Vehicle.model";

export class ExtendedVehicleService extends VehicleService {

    async applyDiscount(vehicleId: string, discount: number): Promise<IVehicle | null> {

        const oldPrice = await super.findVehicleById(vehicleId)

        if (oldPrice) {

            oldPrice.price -= discount;
            return oldPrice;
        } else {
            return null
        }
    }
}