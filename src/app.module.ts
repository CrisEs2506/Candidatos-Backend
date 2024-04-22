import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { CandidatosModule } from './candidatos/candidatos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "oracle", //Database type 
      host: "localhost", //Database host
      port: 1521, //Database port
      username: "crisDev", //Database username
      password: "admin", //Database password
      database: 'CandidatosBD', //Database name
      sid: "XE", //SID (Service Identifier) for Oracle database
      entities: [__dirname + '/**/*.entity{.ts,.js}'], //Entities de NestJS .entity.ts para mapear
      synchronize: true, // Auto-create database tables
      logging: true, // Enable SQL query logging (helpful for debugging)
    }), 
    CandidatosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
