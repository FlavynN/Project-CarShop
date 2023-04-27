import MotorCycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private motorCycleODM: MotorCycleODM = new MotorCycleODM();

  private motorcycleDomain(motorcycle: IMotorcycle) : MotorCycle {
    return new MotorCycle(motorcycle);
  }

  public async createMotorcycle(motorcycle: IMotorcycle) : Promise<MotorCycle> {
    const newMotorcycle = await this.motorCycleODM.create(motorcycle);
    return this.motorcycleDomain(newMotorcycle);
  } 
}