import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducModule } from './produc/produc.module';
import { CommonModule } from './common/common.module';


@Module({
  imports: [ConfigModule.forRoot(
    {isGlobal: true}
  ),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configServices: ConfigService) => ({
      type:               'postgres',
      host:               configServices.get<string>("DB_HOST"),
      port:               configServices.get<number>("DB_PORT"),
      database:           configServices.get<string>("DB_NAME"),
      username:           configServices.get<string>("DB_USERNAME"),
      password:           configServices.get<string>("DB_PASSWORD"),
      autoLoadEntities:   true,
      synchronize:        true
    })
  }),
    ProducModule,
    CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
