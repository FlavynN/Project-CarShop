import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('testa GET /:id de cars', function () {
  afterEach(sinon.restore);
  it('testa o Endpoint GET /:id cars', async function () {
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
    
    sinon.stub(Model, 'findOne').resolves(carMock);
    const result = await service.getCarById(carMock.id);
    expect(result).to.be.deep.equal(carMock);
  });

  it('testa o Endpoint GET /:id motorcycles', async function () {
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
    
    sinon.stub(Model, 'findOne').resolves(motorcycleMock);
    const result = await service.getMotorcycleById(motorcycleMock.id);
    expect(result).to.be.deep.equal(motorcycleMock);
  });
});