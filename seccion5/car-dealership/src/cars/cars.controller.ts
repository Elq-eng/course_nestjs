import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
  // @UsePipes( ValidationPipe )
  createCar( @Body() createCarDto: CreateCarDto ){
    return this.carService.create(createCarDto)
  }

  @Patch(':id')
  updateCar( @Body() updateDto: UpdateCarDto, @Param('id', ParseUUIDPipe) id:string){
    return this.carService.update( id, updateDto)
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseIntPipe) id:string){
    return this.carService.delete( id )
  }


}
