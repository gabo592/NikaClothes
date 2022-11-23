import type { NextApiRequest, NextApiResponse } from "next"
import connection from "../../utils/Database"

interface MateriaPrima {
    Id: Number | null,
    Nombre: string | null,
    Descripcion: string | null,
    Cantidad: Number | null,
    UnidadMedida: string | null,
    Precio: Number | null,
    Estado: boolean | null
}

type Data = {
    message: string,
    results: MateriaPrima[]
}

const crear = async (values: MateriaPrima): Promise<any> => {
    let { Nombre, Descripcion, Cantidad, UnidadMedida, Precio } = values

    Nombre = !Nombre ? null : `'${Nombre}'`
    Descripcion = !Descripcion ? null : `'${Descripcion}'`
    Cantidad = !Cantidad ? null : Cantidad
    UnidadMedida = !UnidadMedida ? null : `'${UnidadMedida}'`
    Precio = !Precio ? null : Precio

    const response = await connection.query(`SELECT * FROM "Inventario"."MATERIA_PRIMA_CREATE"(${Nombre}, ${Descripcion}, ${Cantidad}, ${UnidadMedida}, ${Precio})`)

    return response
}

const buscar = async (values: MateriaPrima): Promise<any> => {
    let {
        Id,
        Nombre,
        Descripcion,
        Cantidad,
        UnidadMedida,
        Precio,
        Estado
    } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : `'${Nombre}'`
    Descripcion = !Descripcion ? null : `'${Descripcion}'`
    Cantidad = !Cantidad ? null : Cantidad
    UnidadMedida = !UnidadMedida ? null : `'${UnidadMedida}'`
    Precio = !Precio ? null : Precio
    Estado = !Estado ? null : Estado

    const response = await connection.query(`SELECT * FROM "Inventario"."MATERIA_PRIMA_READ"(${Id}, ${Nombre}, ${Descripcion}, ${Cantidad}, ${UnidadMedida}, ${Precio}, ${Estado})`)

    return response
}

const actualizar = async (values: MateriaPrima): Promise<any> => {
    let {
        Id,
        Nombre,
        Descripcion,
        Cantidad,
        UnidadMedida,
        Precio
    } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : `'${Nombre}'`
    Descripcion = !Descripcion ? null : `'${Descripcion}'`
    Cantidad = !Cantidad ? null : Cantidad
    UnidadMedida = !UnidadMedida ? null : `'${UnidadMedida}'`
    Precio = !Precio ? null : Precio

    const response = await connection.query(`SELECT * FROM "Inventario"."MATERIA_PRIMA_UPDATE"(${Id}, ${Nombre}, ${Descripcion}, ${Cantidad}, ${UnidadMedida}, ${Precio})`)

    return response
}

const eliminar = async (values: MateriaPrima): Promise<any> => {
    let { Id } = values

    Id = !Id ? null : Id

    const response = await connection.query(`SELECT * FROM "Inventario"."MATERIA_PRIMA_DELETE"(${Id})`)

    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req

    let response: any

    try {
        switch (method) {
            case "POST":
                response = await crear(body)
                return res.status(200).json({ message: "Creando Materia Prima", results: response.rows })
            case "GET":
                response = await buscar(body)
                return res.status(200).json({ message: "Buscando Materias Primas", results: response.rows })
            case "PUT":
                response = await actualizar(body)
                return res.status(200).json({ message: "Actualizando Materia Prima", results: response.rows })
            case "DELETE":
                response = await eliminar(body)
                return res.status(200).json({ message: "Eliminando Materia Prima", results: response.rows })
            default:
                return res.status(404).json({ message: "No se obtuvieron resultados", results: [] })
        }
    } catch (error) {
        return res.status(404).json({ message: (error as Error).message, results: [] })
    }
}