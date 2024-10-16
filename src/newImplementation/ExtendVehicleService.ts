import { VehicleService } from "../services/Vehicle.services";
import { IVehicle } from "../models/Vehicle.model";

export class ExtendedVehicleService extends VehicleService {

    async applyDiscount(id: string, { discount }: { discount: number }): Promise<IVehicle | null> {
        console.log(id, discount);

        const oldPrice = await super.findVehicleById(id)

        console.log(oldPrice);

        if (oldPrice) {
            oldPrice.price -= discount;
            return oldPrice;
        } else {
            return null
        }
    }
}