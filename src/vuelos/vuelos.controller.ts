import { Body, Controller, Post ,Get, Param, Put, Delete} from '@nestjs/common';
import { VuelosDTO } from './dto/vuelos.dto';
import { VuelosService } from './vuelos.service';

@Controller('api/v1/vuelos')
export class VuelosController {
    constructor(private readonly vuelosServicio:VuelosService){}

    @Post()
    insertar(@Body() vuelosDTO : VuelosDTO){
        return this.vuelosServicio.insertar(vuelosDTO);
    }
    @Get()
    todos(){
        return this.vuelosServicio.todos();
    }

    @Get(':id')
    Uno(@Param('id') id:string){
        return this.vuelosServicio.uno(id);
    }

    @Put(':id')
    actualizar(@Param('id')id:string, @Body() vuelosDTO: VuelosDTO){
        return this.vuelosServicio.actualizar(id,vuelosDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.vuelosServicio.eliminar(id);
    }

}
