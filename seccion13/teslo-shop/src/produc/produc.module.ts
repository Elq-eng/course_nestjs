import { Module } from '@nestjs/common';
import { ProducService } from './produc.service';
import { ProducController } from './produc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produc,ProductImage } from './entities';

@Module({
  controllers: [ProducController],
  providers: [ProducService],
  imports:[
    TypeOrmModule.forFeature([Produc, ProductImage])
  ],
  exports: [
    ProducService,
    TypeOrmModule
  ]
})
export class ProducModule {}
