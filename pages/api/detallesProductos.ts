import type { NextApiRequest, NextApiResponse } from "next"
import connection from "../../utils/Database"

interface DetalleProducto {
    IdProducto: Number | null,
    IdMateriaPrima: Number | null,
    Cantidad: Number | null
}

type Data = {
    message: string,
    results: DetalleProducto[]
}

const crear = async (values: DetalleProducto): Promise<any> => {
    let { IdProducto, IdMateriaPrima, Cantidad } = values

    IdProducto = !IdProducto ? null : IdProducto
    IdMateriaPrima = !IdMateriaPrima ? null : IdMateriaPrima
    Cantidad = !Cantidad ? null : Cantidad

    const response = await connection.query(`SELECT * FROM "Inventario"."DETALLE_PRODUCTO_CREATE"(${IdProducto}, ${IdMateriaPrima}, ${Cantidad})`)

    return response
}

const buscar = async (values: DetalleProducto): Promise<any> => {
    let { IdProducto, IdMateriaPrima, Cantidad } = values

    IdProducto = !IdProducto ? null : IdProducto
    IdMateriaPrima = !IdMateriaPrima ? null : IdMateriaPrima
    Cantidad = !Cantidad ? null : Cantidad

    const response = await connection.query(`SELECT * FROM "Inventario"."DETALLE_PRODUCTO_READ"(${IdProducto}, ${IdMateriaPrima}, ${Cantidad})`)

    return response
}

const actualizar = async (values: DetalleProducto): Promise<any> => {
    let { IdProducto, IdMateriaPrima, Cantidad } = values

    IdProducto = !IdProducto ? null : IdProducto
    IdMateriaPrima = !IdMateriaPrima ? null : IdMateriaPrima
    Cantidad = !Cantidad ? null : Cantidad

    const response = await connection.query(`SELECT * FROM "Inventario"."DETALLE_PRODUCTO_UPDATE"(${IdProducto}, ${IdMateriaPrima}, ${Cantidad})`)

    return response
}

const eliminar = async (values: DetalleProducto): Promise<any> => {
    let { IdProducto, IdMateriaPrima } = values

    IdProducto = !IdProducto ? null : IdProducto
    IdMateriaPrima = !IdMateriaPrima ? null : IdMateriaPrima

    const response = await connection.query(`SELECT * FROM "Inventario"."DETALLE_PRODUCTO_DELETE"(${IdProducto}, ${IdMateriaPrima})`)

    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req

    let response: any

    try {
        switch (method) {
            case "POST":
                response = await crear(body)
                return res.status(200).json({ message: "Creando Detalle de Producto", results: response.rows })
            case "GET":
                response = await buscar(body)
                return res.status(200).json({ message: "Buscando Detalles de Productos", results: response.rows })
            case "PUT":
                response = await actualizar(body)
                return res.status(200).json({ message: "Actualizando Detalle de Producto", results: response.rows })
            case "DELETE":
                response = await eliminar(body)
                return res.status(200).json({ message: "Eliminando Detalle de Producto", results: response.rows })
            default:
                return res.status(404).json({ message: "No se obtuvieron resultados", results: [] })
        }
    } catch (error) {
        return res.status(404).json({ message: (error as Error).message, results: [] })
    }
}