import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { TipoDoc } from "./tipoDocs.entity"

@Entity({ name: 'CANDIDATO' })
export class Candidato {
    @PrimaryColumn({ unique: true })
    USUARIO: string
    
    @Column()
    NOMBRE: string
    
    @Column()
    APELLIDO: string
    
    @Column({ type: 'date' })
    FECHANAC: Date
    
    @Column()
    NDOC: number

    @Column()
    IDTIPODOCFK: string

    @ManyToOne(() => TipoDoc, { cascade: true })
    @JoinColumn({ name: "IDTIPODOCFK" })
    TIPODOC: TipoDoc;
}