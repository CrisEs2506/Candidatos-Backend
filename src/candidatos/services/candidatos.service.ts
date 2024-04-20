import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Candidato } from '../entities/candidatos.entity';
import { CreateCandidatoDto } from '../dto/createCandidato.dto';
import { TipoDocsService } from './tipoDocs.service';

@Injectable()
export class CandidatosService {
    constructor(
        @InjectRepository(Candidato) private candidatoRepository: Repository<Candidato>,
        private tipoDocsService: TipoDocsService
    ) {}

    async createCandidato(candidato: CreateCandidatoDto) {
        const tipoDocFound = await this.tipoDocsService.getTipoDoc(candidato.idTipoDocFK)

        if (!tipoDocFound) return new HttpException('Tipo de documento no encontrado.', HttpStatus.NOT_FOUND)

        const candidatoFound = await this.candidatoRepository.findOne({
            where: {
                usuario: candidato.usuario
            }
        })

        if(candidatoFound) {
            return new HttpException('El Candidato ya está registrado.', HttpStatus.CONFLICT)
        }

        const newCandidato = this.candidatoRepository.create(candidato);
        return this.candidatoRepository.save(newCandidato);
    }

    getCandidatos() {
        return this.candidatoRepository.find()
    }
}