import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('testa GET de Todos os Carros', function () {
  afterEach(sinon.restore);
  it('testa o Endpoint GET All cars', async function () {
    const service = new CarService();

    const carMock = [{
      id: '644a4f1831351c628e6f2d41',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    }];
    
    sinon.stub(Model, 'find').resolves(carMock); 
    const result = await service.getAllCars();
    expect(result).to.be.deep.equal(carMock);
  });

  it('testa o Endpoint GET All motorcycles', async function () {
    const service = new MotorcycleService();

    const motorMock = [{
      id: '644a736e471aafc84ed7a68f',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    }];
    
    sinon.stub(Model, 'find').resolves(motorMock);
    const result = await service.getAllMotorcycles();
    expect(result).to.be.deep.equal(motorMock);
  });
});
