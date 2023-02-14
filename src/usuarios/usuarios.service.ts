import { HttpStatus, Injectable } from '@nestjs/common';
import { IUsuario } from 'src/common/interface/usuario.interface';
import { UsuarioDTO } from './dto/usuario.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { USUARIO } from 'src/common/models/models';
import { Model } from 'mongoose';
@Injectable()
export class UsuariosService {
    constructor(@InjectModel(USUARIO.name) private readonly modelo: Model<IUsuario>){}

    async hashPassword(password:string):Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }
    async insertar(usuarioDTO:UsuarioDTO):Promise<IUsuario>{
        const hash = await this.hashPassword(usuarioDTO.password);
        const newusuario = new this.modelo({...usuarioDTO, password:hash});
        return newusuario.save();
    }

    async todos():Promise<IUsuario[]>{
        return await this.modelo.find();
    }

    async uno(id:string):Promise<IUsuario>{
        return await this.modelo.findById(id);
    }
    
    async actualizar(id:string, usuarioDTO:UsuarioDTO):Promise<IUsuario>{
        const hash = await this.hashPassword(usuarioDTO.password);
        const usuario = new this.modelo({...usuarioDTO, password:hash});
        return await this.modelo.findByIdAndUpdate(id,usuarioDTO,{new:true});
    }

    async eliminar(id:string){
        await this.modelo.findByIdAndDelete(id);
        return {status:HttpStatus.OK, msg:'Se elimino Correctamente'};
    }
}
