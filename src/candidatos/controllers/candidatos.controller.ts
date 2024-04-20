import { Controller, Post, Body, Get } from '@nestjs/common';

import { CreateCandidatoDto } from '../dto/createCandidato.dto';
import { CandidatosService } from '../services/candidatos.service';
import { Candidato } from '../entities/candidatos.entity';

@Controller('candidatos')
export class CandidatosController {
    constructor(private candidatosService: CandidatosService) {}
    
    //GET /candidatos
    @Get()
    getCandidatos(): Promise<Candidato[]> {
        return this.candidatosService.getCandidatos();
    }

    //POST /candidatos
    @Post()
    createCandidato(@Body() newCandidato: CreateCandidatoDto) {
        return this.candidatosService.createCandidato(newCandidato);
    }
}
