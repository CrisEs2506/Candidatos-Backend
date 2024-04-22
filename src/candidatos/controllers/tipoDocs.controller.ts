import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { TipoDocsService } from '../services/tipoDocs.service';
import { TipoDoc } from '../entities/tipoDocs.entity';
import { CreateTipoDoc } from '../dto/createTipoDoc.dto';

@Controller('tipoDocs')
export class TipoDocsController {
    constructor(private tipoDocService: TipoDocsService) {}

    //GET /tipoDocs
    @Get()
    getTipoDocs(): Promise<TipoDoc[]> {
        return this.tipoDocService.getTipoDocs();
    } 
    
    //GET /tipoDocs/:id
    @Get(':id')
    getTipoDoc(@Param('id') id: string) {
        return this.tipoDocService.getTipoDoc(id);
    } 

    //POST /tipoDocs
    @Post()
    createTipoDoc(@Body() newTipoDoc: CreateTipoDoc) {
        return this.tipoDocService.createTipoDoc(newTipoDoc);
    }
}
