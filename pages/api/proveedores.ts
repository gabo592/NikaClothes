import type { NextApiRequest, NextApiResponse } from "next"
import connection from "../../utils/Database"

type Data = {
    message: string,
    results: object[]
}

interface Proveedor {
    Id: Number | null,
    Nombre: string | null,
    Telefono: string | null,
    Direccion: string | null,
    Estado: boolean | null
}

const crear = async (values: Proveedor): Promise<any> => {
    let {
        Nombre,
        Telefono,
        Direccion
    } = values

    Nombre = !Nombre ? null : Nombre
    Telefono = !Telefono ? null : Telefono
    Direccion = !Direccion ? null : Direccion

    const response = await connection.query(`SELECT * FROM "Compras"."PROVEEDOR_CREATE"(${Nombre}, ${Telefono}, ${Direccion})`)

    return response
}

const buscar = async (values: Proveedor): Promise<any> => {
    let {
        Id,
        Nombre,
        Telefono,
        Direccion,
        Estado
    } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : Nombre
    Telefono = !Telefono ? null : Telefono
    Direccion = !Direccion ? null : Direccion
    Estado = !Estado ? null : Estado

    const response = await connection.query(`SELECT * FROM "Compras"."PROVEEDOR_READ"(${Id}, ${Nombre}, ${Telefono}, ${Direccion}, ${Estado})`)

    return response
}

const actualizar = async (values: Proveedor): Promise<any> => {
    let {
        Id,
        Nombre,
        Telefono,
        Direccion
    } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : Nombre
    Telefono = !Telefono ? null : Telefono
    Direccion = !Direccion ? null : Direccion

    const response = await connection.query(`SELECT * FROM "Compras"."PROVEEDOR_UPDATE"(${Id}, ${Nombre}, ${Telefono}, ${Direccion})`)

    return response
}

const eliminar = async (values: Proveedor): Promise<any> => {
    let { Id } = values

    Id = !Id ? null : Id

    const response = await connection.query(`SELECT * FROM "Compras"."PROVEEDOR_DELETE"(${Id})`)

    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req

    let response: any

    try {
        switch(method) {
            case "POST":
                response = await crear(body)
                return res.status(200).json({ message: "Creando Proveedor", results: response.rows })
            case "GET":
                response = await buscar(body)
                return res.status(200).json({ message: "Buscando Proveedores", results: response.rows })
            case "PUT":
                response = await actualizar(body)
                return res.status(200).json({ message: "Actualizando Proveedor", results: response.rows })
            case "DELETE":
                response = await eliminar(body)
                return res.status(200).json({ message: "Eliminando Proveedor", results: response.rows })
            default:
                return res.status(404).json({ message: "No se obtuvieron resultados", results: [] })
        }
    } catch(error) {
        return res.status(404).json({ message: (error as Error).message, results: [] })
    }
}