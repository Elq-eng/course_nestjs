import { Injectable, NotFoundException } from '@nestjs/common';
import { Cars } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'

@Injectable()
export class CarsService {

  private cars:Cars[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corola'
    },
    {
      id:uuid(),
      brand: 'Honda',
      model: 'Civic'
    },
    {
      id:uuid(),
      brand: 'Jeep',
      model: 'Cherokee'
    }];

    findAll(){
      return this.cars
    }

    findOneById ( id:string ){
      
      const car = this.cars.find( car => car.id === id );
      if( !car ) throw new NotFoundException();
      return car
    }
}
