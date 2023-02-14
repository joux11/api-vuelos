import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IVuelo } from 'src/common/interface/vuelo.interface';
import { VUELO } from 'src/common/models/models';
import { VuelosDTO } from './dto/vuelos.dto';

@Injectable()
export class VuelosService {
    constructor(@InjectModel(VUELO.name) private readonly modelo: Model<IVuelo>){}

    async insertar(vuelosDTO:VuelosDTO):Promise<IVuelo>{
        const newvuelo = new this.modelo({...vuelosDTO});
        return newvuelo.save();
    }

    async todos():Promise<IVuelo[]>{
        return await this.modelo.find();
    }

    async uno(id:string):Promise<IVuelo>{
        return await this.modelo.findById(id);
    }
    
    async actualizar(id:string, vuelosDTO:VuelosDTO):Promise<IVuelo>{
       
        const usuario = new this.modelo({...vuelosDTO});
        return await this.modelo.findByIdAndUpdate(id,vuelosDTO,{new:true});
    }

    async eliminar(id:string){
        await this.modelo.findByIdAndDelete(id);
        return {status:HttpStatus.OK, msg:'Se elimino Correctamente'};
    }
}
