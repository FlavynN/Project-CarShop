import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';

describe('testa GET /:id de cars', function () {
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
});