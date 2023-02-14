import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VUELO } from 'src/common/models/models';
import { VuelosSchema } from './schema/vuelas.schema';
import { VuelosController } from './vuelos.controller';
import { VuelosService } from './vuelos.service';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:VUELO.name,
      useFactory:()=>{
        return VuelosSchema;
      }
    }])
  ],
  controllers:[VuelosController],
  providers: [VuelosService]
})
export class VuelosModule {}
