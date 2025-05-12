import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProducModule } from 'src/produc/produc.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ 
    ProducModule
  ]
})
export class SeedModule {}
