import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPasajero } from 'src/common/interface/pasajero.interface';
import { PASAJERO } from 'src/common/models/models';
import { Model } from 'mongoose';
import { PasajerosDTO } from './dto/pasajeros.dto';

@Injectable()
export class PasajerosService {
    constructor(@InjectModel(PASAJERO.name) private readonly modelo:Model<IPasajero>){}

    async insertar(pasajerosDTO:PasajerosDTO):Promise<IPasajero>{
        const newpasajero = new this.modelo({...pasajerosDTO});
        return newpasajero.save();
    }

    async todos():Promise<IPasajero[]>{
        return await this.modelo.find();
    }
    async uno(id:string):Promise<IPasajero>{
        return await this.modelo.findById(id);
    }

    async actualizar(id:string, pasajerosDTO:PasajerosDTO):Promise<IPasajero>{
       
        const pasajero = new this.modelo({...pasajerosDTO});
        return await this.modelo.findByIdAndUpdate(id,pasajerosDTO,{new:true});
    }

    async eliminar(id:string){
        await this.modelo.findByIdAndDelete(id);
        return {status:HttpStatus.OK, msg:'Se elimino Correctamente'};
    }
}
