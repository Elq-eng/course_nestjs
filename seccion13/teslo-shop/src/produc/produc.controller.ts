import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common';
import { ProducService } from './produc.service';
import { CreateProducDto } from './dto/create-produc.dto';
import { UpdateProducDto } from './dto/update-produc.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('produc')
export class ProducController {
  constructor(private readonly producService: ProducService) {}

  @Post()
  create(@Body() createProducDto: CreateProducDto) {
    return this.producService.create(createProducDto);
  }

  @Get()
  findAll( @Query() paginationdto : PaginationDto) {
    return this.producService.findAll(paginationdto);
  }

  @Get(':term')
  findOne(@Param('term') id:string) {
    return this.producService.findOnePlain(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateProducDto: UpdateProducDto) {
    return this.producService.update(id, updateProducDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.producService.remove(id);
  }
}
