import mongoose, {Document, Schema, model} from "mongoose";

export interface ICarId extends Document {
    _id: String
}

const carIdSchema: Schema = new Schema({
    _id: {type: String, required: true, unique: true},
});

export const CarIdModel = mongoose.model<ICarId>("CarId", carIdSchema);