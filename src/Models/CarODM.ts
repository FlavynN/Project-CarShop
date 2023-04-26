import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private _schema: Schema;
  private _model: Model<ICar>;

  constructor() {
    this._schema = new Schema<ICar>({
      id: { type: String, required: true },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { tpye: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, requred: true },
    });

    this._model = models.Car || model('Car', this._schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this._model.create({ ...car });
  }
}
