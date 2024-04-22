import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TipoDoc } from '../entities/tipoDocs.entity';
import { CreateTipoDoc } from '../dto/createTipoDoc.dto';

@Injectable()
export class TipoDocsService {
    constructor(@InjectRepository(TipoDoc) private tipoDocRepository: Repository<TipoDoc>) {}

    async createTipoDoc(tipoDoc: CreateTipoDoc) {
        const tipoDocFound = await this.tipoDocRepository.findOne({
            where: {
                IDTIPODOC: tipoDoc.IDTIPODOC
            }
        })

        if(tipoDocFound) {
            return new HttpException('El Candidato ya está registrado.', HttpStatus.CONFLICT)
        }

        const newTipoDoc = this.tipoDocRepository.create(tipoDoc);
        return this.tipoDocRepository.save(newTipoDoc);
    }

    getTipoDocs() {
        return this.tipoDocRepository.find()
    }

    async getTipoDoc(IDTIPODOC: string) {
        const tipoDocFound = await this.tipoDocRepository.findOne({
            where: {
                IDTIPODOC
            }
        });

        if(!tipoDocFound) {
            return new HttpException('Tipo de documento no encontrado.', HttpStatus.NOT_FOUND)
        }

        return tipoDocFound;
    }
}
