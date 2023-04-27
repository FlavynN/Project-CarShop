import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';

describe('testa GET de Todos os Carros', function () {
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
});