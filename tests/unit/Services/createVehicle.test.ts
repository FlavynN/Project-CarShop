import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('testa Criaçao de Carros', function () {
  afterEach(sinon.restore);
  
  it('testa criaçao de carros', async function () {
    const service = new CarService();

    const carMock = {
      id: '644a4f1831351c628e6f2d41',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    const carInput : ICar = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };
    
    sinon.stub(Model, 'create').resolves(carMock);
    const result = await service.createCar(carInput);
    expect(result).to.be.deep.equal(carMock);
  });
  it('testa criaçao de motorcycles', async function () {
    const service = new MotorcycleService();

    const motorcycleMock = {
      id: '644a736e471aafc84ed7a68f',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const motorcycleInput : IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    
    sinon.stub(Model, 'create').resolves(motorcycleMock);
    const result = await service.createMotorcycle(motorcycleInput);
    expect(result).to.be.deep.equal(motorcycleMock);
  });
});