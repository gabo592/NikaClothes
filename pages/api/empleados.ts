import type { NextApiRequest, NextApiResponse } from "next"
import connection from "../../utils/Database"

interface Empleado {
    Id: Number | null,
    PrimerNombre: string | null,
    SegundoNombre: string | null,
    PrimerApellido: string | null,
    SegundoApellido: string | null,
    Cedula: string | null,
    Telefono: string | null,
    Direccion: string | null,
    Estado: boolean | null,
    IdMunicipio: Number | null
}

type Data = {
    message: string,
    results: Empleado[]
}

const crear = async (values: Empleado): Promise<any> => {
    let { 
        PrimerNombre,
        SegundoNombre,
        PrimerApellido,
        SegundoApellido,
        Cedula,
        Telefono,
        Direccion,
        IdMunicipio
    } = values

    PrimerNombre = !PrimerNombre ? null : `'${PrimerNombre}'`
    SegundoNombre = !SegundoNombre ? null : `'${SegundoNombre}'`
    PrimerApellido = !PrimerApellido ? null : `'${PrimerApellido}'`
    SegundoApellido = !SegundoApellido ? null : `'${SegundoApellido}'`
    Cedula = !Cedula ? null : `'${Cedula}'`
    Telefono = !Telefono ? null : `'${Telefono}'`
    Direccion = !Direccion ? null : `'${Direccion}'`
    IdMunicipio = !IdMunicipio ? null : IdMunicipio

    const response = await connection.query(`SELECT * FROM "CapitalHumano"."EMPLEADO_CREATE"(${PrimerNombre}, ${SegundoNombre}, ${PrimerApellido}, ${SegundoApellido}, ${Cedula}, ${Telefono}, ${Direccion}, ${IdMunicipio})`)

    return response
}

const buscar = async (values: Empleado): Promise<any> => {
    let {
        Id, 
        PrimerNombre,
        SegundoNombre,
        PrimerApellido,
        SegundoApellido,
        Cedula,
        Telefono,
        Direccion,
        Estado,
        IdMunicipio
    } = values

    Id = !Id ? null : Id
    PrimerNombre = !PrimerNombre ? null : `'${PrimerNombre}'`
    SegundoNombre = !SegundoNombre ? null : `'${SegundoNombre}'`
    PrimerApellido = !PrimerApellido ? null : `'${PrimerApellido}'`
    SegundoApellido = !SegundoApellido ? null : `'${SegundoApellido}'`
    Cedula = !Cedula ? null : `'${Cedula}'`
    Telefono = !Telefono ? null : `'${Telefono}'`
    Direccion = !Direccion ? null : `'${Direccion}'`
    Estado = !Estado ? null : Estado
    IdMunicipio = !IdMunicipio ? null : IdMunicipio
    
    const response = await connection.query(`SELECT * FROM "CapitalHumano"."EMPLEADO_READ"(${Id}, ${PrimerNombre}, ${SegundoNombre}, ${PrimerApellido}, ${SegundoApellido}, ${Cedula}, ${Telefono}, ${Direccion}, ${Estado}, ${IdMunicipio})`)

    return response
}

const actualizar = async (values: Empleado): Promise<any> => {
    let {
        Id, 
        PrimerNombre,
        SegundoNombre,
        PrimerApellido,
        SegundoApellido,
        Cedula,
        Telefono,
        Direccion,
        IdMunicipio
    } = values

    Id = !Id ? null : Id
    PrimerNombre = !PrimerNombre ? null : `'${PrimerNombre}'`
    SegundoNombre = !SegundoNombre ? null : `'${SegundoNombre}'`
    PrimerApellido = !PrimerApellido ? null : `'${PrimerApellido}'`
    SegundoApellido = !SegundoApellido ? null : `'${SegundoApellido}'`
    Cedula = !Cedula ? null : `'${Cedula}'`
    Telefono = !Telefono ? null : `'${Telefono}'`
    Direccion = !Direccion ? null : `'${Direccion}'`
    IdMunicipio = !IdMunicipio ? null : IdMunicipio

    const response = await connection.query(`SELECT * FROM "CapitalHumano"."EMPLEADO_UPDATE"(${Id}, ${PrimerNombre}, ${SegundoNombre}, ${PrimerApellido}, ${SegundoApellido}, ${Cedula}, ${Telefono}, ${Direccion}, ${IdMunicipio})`)

    return response
}

const eliminar = async (values: Empleado): Promise<any> => {
    let { Id } = values

    Id = !Id ? null : Id

    const response = await connection.query(`SELECT * FROM "CapitalHumano"."EMPLEADO_DELETE"(${Id})`)

    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req

    let response: any

    try {
        switch(method) {
            case "POST":
                response = await crear(body)
                return res.status(200).json({ message: "Creando Empleado", results: response.rows })
            case "GET":
                response = await buscar(body)
                return res.status(200).json({ message: "Obteniendo Empleados", results: response.rows })
            case "PUT":
                response = await actualizar(body)
                return res.status(200).json({ message: "Actualizando Empleado", results: response.rows })
            case "DELETE":
                response = await eliminar(body)
                return res.status(200).json({ message: "Eliminando Empleado", results: response.rows })
            default:
                return res.status(404).json({ message: "No se obtuvieron resultados", results: [] })
        }
    } catch(error) {
        return res.status(404).json({ message: (error as Error).message, results: [] })
    }
}