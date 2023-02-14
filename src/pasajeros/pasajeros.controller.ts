import { Body, Post ,Get, Param, Put, Delete} from '@nestjs/common';

import { Controller } from '@nestjs/common';
import { PasajerosDTO } from './dto/pasajeros.dto';
import { PasajerosService } from './pasajeros.service';

@Controller('api/v1/pasajeros')
export class PasajerosController {
    constructor(private readonly pasajerosServicio:PasajerosService){}

    @Post()
    insertar(@Body() pasajerosDTO: PasajerosDTO){
        return this.pasajerosServicio.insertar(pasajerosDTO);
    }
    @Get()
    todos(){
        return this.pasajerosServicio.todos();
    }

    @Get(':id')
    Uno(@Param('id') id:string){
        return this.pasajerosServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id')id:string, @Body() pasajerosDTO: PasajerosDTO){
        return this.pasajerosServicio.actualizar(id,pasajerosDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.pasajerosServicio.eliminar(id);
    }
}
