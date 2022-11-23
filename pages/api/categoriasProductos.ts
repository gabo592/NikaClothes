import type { NextApiRequest, NextApiResponse } from "next"
import connection from "../../utils/Database"

type Data = {
    message: string,
    results: object[]
}

interface CategoriaProducto {
    Id: Number | null,
    Nombre: string | null,
    Estado: boolean | null
}

const crear = async (values: CategoriaProducto): Promise<any> => {
    let { Nombre } = values

    Nombre = !Nombre ? null: `'${Nombre}'`

    const response = connection.query(`SELECT * FROM "Inventario"."CATEGORIA_PRODUCTO_CREATE"(${Nombre})`)

    return response
}

const buscar = async (values: CategoriaProducto): Promise<any> => {
    let { Id, Nombre, Estado } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : `'${Nombre}'`
    Estado = !Estado ? null : Estado

    const response = connection.query(`SELECT * FROM "Inventario"."CATEGORIA_PRODUCTO_READ"(${Id}, ${Nombre}, ${Estado})`)

    return response
}

const actualizar = async (values: CategoriaProducto): Promise<any> => {
    let { Id, Nombre } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : `'${Nombre}'`

    const response = connection.query(`SELECT * FROM "Inventario"."CATEGORIA_PRODUCTO_UPDATE"(${Id}, ${Nombre})`)

    return response
}

const eliminar = async (values: CategoriaProducto): Promise<any> => {
    let { Id } = values

    Id = !Id ? null : Id

    const response = connection.query(`SELECT * FROM "Inventario"."CATEGORIA_PRODUCTO_DELETE"(${Id})`)

    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req

    let response: any

    try {
        switch (method) {
            case "POST":
                response = await crear(body)
                return res.status(200).json({ message: "Creando Categoría de Producto", results: response.rows })
            case "GET":
                response = await buscar(body)
                return res.status(200).json({ message: "Buscando Categorías de Productos", results: response.rows })
            case "PUT":
                response = await actualizar(body)
                return res.status(200).json({ message: "Actualizando Categoría de Producto", results: response.rows })
            case "DELETE":
                response = await eliminar(body)
                return res.status(200).json({ message: "Eliminando Categoría de Producto", results: response.rows })
            default:
                return res.status(404).json({ message: "No se obtuvieron resultados", results: [] })
        }
    } catch (error) {
        return res.status(404).json({ message: (error as Error).message, results: [] })
    }
}