import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {


  constructor( 
    private readonly carService: CarsService
  ){}

  @Get()
  getAllCars(){
    return this.carService.findAll()
  }

  @Get(':id')
  getCarById( @Param('id', ParseUUIDPipe) id:string ){
    return this.carService.findOneById( id )
  }

  @Post()
  createCar( @Body() createCarDto: CreateCarDto ){
    return {createCarDto}
  }

  @Patch(':id')
  updateCar( @Body() body:any, @Param('id', ParseIntPipe) id:number){
    return {body}
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseIntPipe) id:number){
    return {
      ok:true
    }
  }


}
