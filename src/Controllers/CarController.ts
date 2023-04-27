import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllCars() {
    const getCars = await this.service.getAllCars();
    return this.res.status(200).json(getCars);
  }

  public async getCarById() {
    const { id } = this.req.params;
    try {
      const getOneCar = await this.service.getCarById(id);
      if (!getOneCar) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(getOneCar);
    } catch (error) {
      this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateCar() {
    const { id } = this.req.params;
    const car: ICar = {
      ...this.req.body,     
    };
    try {
      const updateCar = await this.service.updateCar(id, car);
      if (!updateCar) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(updateCar);
    } catch (error) {
      this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}
