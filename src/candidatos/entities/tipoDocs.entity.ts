import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Candidato } from "./candidatos.entity";

@Entity({ name: 'TipoDoc' })
export class TipoDoc {
    @PrimaryColumn({ unique: true })
    idTipoDoc: string

    @Column()
    descTipoDoc: string

    @OneToMany(() => Candidato, candidato => candidato.tipoDoc)
    usuarios: Candidato[]
}