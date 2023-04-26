import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private _carODM: CarODM = new CarODM();

  private carDomain(car: ICar) : Car {
    return new Car(car);
  }

  public async createCar(car: ICar): Promise<Car> {
    const newCar = await this._carODM.create(car);
    return this.carDomain(newCar);
  }
}
