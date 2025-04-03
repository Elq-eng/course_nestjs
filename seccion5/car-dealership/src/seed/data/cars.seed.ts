import { Cars } from '../../../dist/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';



export const CARS_SEED:Cars[] =[
  {
    id: uuid(),
    brand:'Toyota',
    model:'Corolla'
  },
  {
    id: uuid(),
    brand:'Honda',
    model:'aveo'
  },
  {
    id: uuid(),
    brand:'Renault',
    model:'chatarra vieja'
  },
  {
    id: uuid(),
    brand:'Toyota',
    model:'pepe'
  }
]