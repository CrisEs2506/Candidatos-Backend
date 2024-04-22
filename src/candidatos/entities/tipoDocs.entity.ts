import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Candidato } from "./candidatos.entity";

@Entity({ name: 'TIPODOC' })
export class TipoDoc {
    @PrimaryColumn({ unique: true })
    IDTIPODOC: string

    @Column()
    DESCTIPODOC: string

    @OneToMany(() => Candidato, candidato => candidato.TIPODOC)
    USUARIOS: Candidato[]
}