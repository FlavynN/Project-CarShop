import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';

describe('testa Criaçao de Carros', function () {
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
});