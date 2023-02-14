import { Body, Controller, Post ,Get, Param, Put, Delete} from '@nestjs/common';
import { UsuarioDTO } from './dto/usuario.dto';
import { UsuariosService } from './usuarios.service';

@Controller('api/v1/usuarios')
export class UsuariosController {
    constructor(private readonly usuarioServicio:UsuariosService){}

    @Post()
    insertar(@Body() usuarioDTO : UsuarioDTO){
        return this.usuarioServicio.insertar(usuarioDTO);
    }

    @Get()
    todos(){
        return this.usuarioServicio.todos();
    }

    @Get(':id')
    Uno(@Param('id') id:string){
        return this.usuarioServicio.uno(id);
    }

    @Put(':id')
    actualizar(@Param('id')id:string, @Body() usuarioDTO: UsuarioDTO){
        return this.usuarioServicio.actualizar(id,usuarioDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.usuarioServicio.eliminar(id);
    }

}

