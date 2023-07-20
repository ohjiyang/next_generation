import {CarIdModel} from "../../db/carId/index";

export class CarIdData {
    public static async CreateCarId(id: String) {
        const candidate = await CarIdModel.findOne({
            _id: id,
        })

        if (!candidate) {
            const doc = new CarIdModel({
                _id: id
            })

            const car = await doc.save()

            return(car._id)
        }
    }
}