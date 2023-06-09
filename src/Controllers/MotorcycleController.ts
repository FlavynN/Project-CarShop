import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.createMotorcycle(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotorcycles() {
    const getMotorcycles = await this.service.getAllMotorcycles();
    return this.res.status(200).json(getMotorcycles);
  }

  public async getCarById() {
    const { id } = this.req.params;
    try {
      const getOneMotorcycle = await this.service.getMotorcycleById(id);
      if (!getOneMotorcycle) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(getOneMotorcycle);
    } catch (error) {
      this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateMotorcycle() {
    const { id } = this.req.params;
    const motorcycle : IMotorcycle = {
      ...this.req.body,
    };
    try {
      const updateMotorcycle = await this.service.updateMotorcycle(id, motorcycle);
      if (!updateMotorcycle) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(updateMotorcycle);
    } catch (error) {
      this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}