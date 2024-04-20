//Se colocan únicamnete los datos obligatorios, los opcionales no van acá
export class CreateCandidatoDto {
    usuario: string
    nombre: string
    apellido: string
    fechaNac: Date
    nDoc: number
    idTipoDocFK: string
}