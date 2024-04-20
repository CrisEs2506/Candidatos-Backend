import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { TipoDoc } from "./tipoDocs.entity"

@Entity({ name: 'Candidato' })
export class Candidato {
    @PrimaryColumn({ unique: true })
    usuario: string
    
    @Column()
    nombre: string
    
    @Column()
    apellido: string
    
    @Column({ type: 'date' })
    fechaNac: Date
    
    @Column()
    nDoc: number

    @Column()
    idTipoDocFK: string

    @ManyToOne(() => TipoDoc, tipoDoc => tipoDoc.usuarios)
    tipoDoc: TipoDoc
}