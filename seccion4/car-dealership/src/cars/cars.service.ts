import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { Cars } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';

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
    create( createDto :CreateCarDto){
      const car : Cars = {
        id: uuid(), 
        ...createDto
      }
      this.cars.push(car)
      return car
    }

    update( id: string, updateCarDto:UpdateCarDto ){
      let carDB = this.findOneById(id)

      if( updateCarDto.id && updateCarDto.id !== id ) throw new BadGatewayException('Car id is no vlid inside body')

      this.cars = this.cars.map( car => {
        if( car.id = id ){
          carDB = {...carDB,...updateCarDto,id     }
          return carDB
        }
      })


      return carDB;//carro actualizado
    }

    delete( id: string){
      const car = this.findOneById(id);
      this.cars= this.cars.filter( car => car.id !== id);
    }

  }
