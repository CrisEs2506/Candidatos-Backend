//Se colocan únicamnete los datos obligatorios, los opcionales no van acá
export class CreateCandidatoDto {
    USUARIO: string
    NOMBRE: string
    APELLIDO: string
    FECHANAC: Date
    NDOC: number
    IDTIPODOCFK: string
}