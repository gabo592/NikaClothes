import type { NextApiRequest, NextApiResponse } from "next"
import connection from "../../utils/Database"

interface SubCategoriaProducto {
    Id: Number | null,
    Nombre: string | null,
    Estado: boolean | null,
    IdCategoria: Number | null
}

type Data = {
    message: string,
    results: SubCategoriaProducto[]
}

const crear = async (values: SubCategoriaProducto): Promise<any> => {
    let { Nombre, IdCategoria } = values

    Nombre = !Nombre ? null : `'${Nombre}'`
    IdCategoria = !IdCategoria ? null : IdCategoria

    const response = await connection.query(`SELECT * FROM "Inventario"."SUB_CATEGORIA_PRODUCTO_CREATE"(${Nombre}, ${IdCategoria})`)

    return response
}

const buscar = async (values: SubCategoriaProducto): Promise<any> => {
    let { 
        Id,
        Nombre,
        Estado,
        IdCategoria
    } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : `'${Nombre}'`
    Estado = !Estado ? null : Estado
    IdCategoria = !IdCategoria ? null : IdCategoria

    const response = await connection.query(`SELECT * FROM "Inventario"."SUB_CATEGORIA_PRODUCTO_READ"(${Id}, ${Nombre}, ${Estado}, ${IdCategoria})`)

    return response
}

const actualizar = async (values: SubCategoriaProducto): Promise<any> => {
    let { 
        Id,
        Nombre,
        IdCategoria
    } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : `'${Nombre}'`
    IdCategoria = !IdCategoria ? null : IdCategoria

    const response = await connection.query(`SELECT * FROM "Inventario"."SUB_CATEGORIA_PRODUCTO_READ"(${Id}, ${Nombre}, ${IdCategoria})`)

    return response
}

const eliminar = async (values: SubCategoriaProducto): Promise<any> => {
    let { Id } = values

    Id = !Id ? null : Id

    const response = await connection.query(`SELECT * FROM "Inventario"."SUB_CATEGORIA_PRODUCTO_DELETE"(${Id})`)

    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req

    let response: any

    try {
        switch (method) {
            case "POST":
                response = await crear(body)
                return res.status(200).json({ message: "Creando SubCategoria de Productos", results: response.rows })
            case "GET":
                response = await buscar(body)
                return res.status(200).json({ message: "Obteniendo SubCategorias de Productos", results: response.rows })
            case "PUT":
                response = await actualizar(body)
                return res.status(200).json({ message: "Actualizando SubCategoria de Productos", results: response.rows })
            case "DELETE":
                response = await eliminar(body)
                return res.status(200).json({ message: "Eliminando SubCategoria de Productos", results: response.rows })
            default:
                return res.status(404).json({ message: "No se obtuvieron resultados", results: [] })
        }
    } catch (error) {
        return res.status(404).json({ message: (error as Error).message, results: [] })
    }
}