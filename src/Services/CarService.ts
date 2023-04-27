import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private carODM: CarODM = new CarODM();

  private carDomain(car: ICar) : Car {
    return new Car(car);
  }

  public async createCar(car: ICar): Promise<Car> {
    const newCar = await this.carODM.create(car);
    return this.carDomain(newCar);
  }

  public async getAllCars() {
    const getCars = await this.carODM.find();
    const allCars = getCars.map((car) => this.carDomain(car));
    return allCars;
  }

  public async getCarById(id: string) {
    const getOneCar = await this.carODM.findById(id);
    if (!getOneCar) { 
      return null; 
    }
    return this.carDomain(getOneCar);
  }

  public async updateCar(id: string, car: Partial<ICar>) {
    const updateCar = await this.carODM.update(id, car);
    if (!updateCar) {
      return null;
    }
    return this.carDomain(updateCar);
  }
}
