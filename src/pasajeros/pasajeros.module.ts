import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PASAJERO} from 'src/common/models/models';
import { PasajeroSchema } from './schema/pasajeros.schema';
import { PasajerosController } from './pasajeros.controller';
import { PasajerosService } from './pasajeros.service';

@Module({
    imports:[
        MongooseModule.forFeatureAsync([{
            name:PASAJERO.name,
            useFactory:()=>{
                return PasajeroSchema;
            }
        }])
    ],
    controllers:[PasajerosController],
    providers:[PasajerosService]
})
export class PasajerosModule {}
