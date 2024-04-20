import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CandidatosController } from './controllers/candidatos.controller';
import { TipoDocsController } from './controllers/tipoDocs.controller';
import { CandidatosService } from './services/candidatos.service';
import { TipoDocsService } from './services/tipoDocs.service';

import { Candidato } from './entities/candidatos.entity';
import { TipoDoc } from './entities/tipoDocs.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Candidato, TipoDoc])],
    controllers: [CandidatosController, TipoDocsController],
    providers: [CandidatosService, TipoDocsService]
})
export class CandidatosModule {}
