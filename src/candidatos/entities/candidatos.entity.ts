import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
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

    @ManyToOne(() => TipoDoc, { cascade: true })
    @JoinColumn({ name: "idTipoDocFK" })
    tipoDoc: TipoDoc;
}