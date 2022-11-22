import type { NextApiRequest, NextApiResponse } from "next"
import connection from "../../utils/Database"

type Data = {
    message: string,
    results: object[]
}

interface Compra {
    Id: Number | null,
    Fecha: Date | null,
    Estado: boolean | null,
    IdEmpleado: Number | null,
    IdProveedor: Number | null
}

const crear = async (values: Compra) => {
    let {
        Fecha,
        IdEmpleado,
        IdProveedor
    } = values

    Fecha = !Fecha ? null : Fecha
    IdEmpleado = !IdEmpleado ? null : IdEmpleado
    IdProveedor = !IdProveedor ? null : IdProveedor

    const response = await connection.query(`SELECT * FROM "Compras"."COMPRA_CREATE"(${Fecha}, ${IdEmpleado}, ${IdProveedor})`)

    return response
}

const buscar = async (values: Compra) => {
    let {
        Id,
        Fecha,
        Estado,
        IdEmpleado,
        IdProveedor
    } = values

    Id = !Id ? null : Id
    Fecha = !Fecha ? null : Fecha
    Estado = !Estado ? null : Estado
    IdEmpleado = !IdEmpleado ? null : IdEmpleado
    IdProveedor = !IdProveedor ? null : IdProveedor

    const response = await connection.query(`SELECT * FROM "Compras"."COMPRA_READ"(${Id}, ${Fecha}, ${Estado}, ${IdEmpleado}, ${IdProveedor})`)

    return response
}

const actualizar = async (values: Compra) => {
    let {
        Id,
        Fecha,
        IdEmpleado,
        IdProveedor
    } = values

    Id = !Id ? null : Id
    Fecha = !Fecha ? null : Fecha
    IdEmpleado = !IdEmpleado ? null : IdEmpleado
    IdProveedor = !IdProveedor ? null : IdProveedor

    const response = await connection.query(`SELECT * FROM "Compras"."COMPRA_UPDATE"(${Id}, ${Fecha}, ${IdEmpleado}, ${IdProveedor})`)

    return response
}

const eliminar = async (values: Compra) => {
    let { Id } = values

    Id = !Id ? null : Id

    const response = await connection.query(`SELECT * FROM "Compras"."COMPRA_DELETE"(${Id})`)

    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req

    let response: any

    try {
        switch(method) {
            case "POST":
                response = await crear(body)
                return res.status(200).json({ message: "Creando Compra", results: response.rows })
            case "GET":
                response = await buscar(body)
                return res.status(200).json({ message: "Obteniendo Compra", results: response.rows })
            case "PUT":
                response = await actualizar(body)
                return res.status(200).json({ message: "Actualizando Compra", results: response.rows })
            case "DELETE":
                response = await eliminar(body)
                return res.status(200).json({ message: "Eliminando Compra", results: response.rows })
            default:
                return res.status(200).json({ message: "No se obtuvieron resultados", results: [] })
        }
    } catch(error) {
        return res.status(404).json({ message: (error as Error).message, results: [] })
    }
}