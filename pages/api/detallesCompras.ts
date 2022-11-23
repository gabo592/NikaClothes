import type { NextApiRequest, NextApiResponse } from "next"
import connection from "../../utils/Database"

interface DetallesCompras {
    IdCompra: Number | null,
    IdMateriaPrima: Number | null,
    Cantidad: Number | null,
    Costo: Number | null,
    Descuento: Number | null
}

type Data = {
    message: string,
    results: DetallesCompras[]
}

const crear = async (values: DetallesCompras): Promise<any> => {
    let {
        IdCompra,
        IdMateriaPrima,
        Cantidad,
        Costo,
        Descuento
    } = values

    IdCompra = !IdCompra ? null : IdCompra
    IdMateriaPrima = !IdMateriaPrima ? null : IdMateriaPrima
    Cantidad = !Cantidad ? null : Cantidad
    Costo = !Costo ? null : Costo
    Descuento = !Descuento ? null : Descuento

    const response = await connection.query(`SELECT * FROM "Compras"."DETALLE_COMPRA_CREATE"(${IdCompra}, ${IdMateriaPrima}, ${Cantidad}, ${Costo}, ${Descuento})`)

    return response
}

const buscar = async (values: DetallesCompras): Promise<any> => {
    let {
        IdCompra,
        IdMateriaPrima,
        Cantidad,
        Costo,
        Descuento
    } = values

    IdCompra = !IdCompra ? null : IdCompra
    IdMateriaPrima = !IdMateriaPrima ? null : IdMateriaPrima
    Cantidad = !Cantidad ? null : Cantidad
    Costo = !Costo ? null : Costo
    Descuento = !Descuento ? null : Descuento

    const response = await connection.query(`SELECT * FROM "Compras"."DETALLE_COMPRA_READ"(${IdCompra}, ${IdMateriaPrima}, ${Cantidad}, ${Costo}, ${Descuento})`)

    return response
}

const actualizar = async (values: DetallesCompras): Promise<any> => {
    let {
        IdCompra,
        IdMateriaPrima,
        Cantidad,
        Costo,
        Descuento
    } = values

    IdCompra = !IdCompra ? null : IdCompra
    IdMateriaPrima = !IdMateriaPrima ? null : IdMateriaPrima
    Cantidad = !Cantidad ? null : Cantidad
    Costo = !Costo ? null : Costo
    Descuento = !Descuento ? null : Descuento

    const response = await connection.query(`SELECT * FROM "Compras"."DETALLE_COMPRA_UPDATE"(${IdCompra}, ${IdMateriaPrima}, ${Cantidad}, ${Costo}, ${Descuento})`)

    return response
}

const eliminar = async (values: DetallesCompras): Promise<any> => {
    let { IdCompra, IdMateriaPrima } = values

    IdCompra = !IdCompra ? null : IdCompra
    IdMateriaPrima = !IdMateriaPrima ? null : IdMateriaPrima

    const response = await connection.query(`SELECT * FROM "Compras"."DETALLE_COMPRA_DELETE"(${IdCompra}, ${IdMateriaPrima})`)

    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req

    let response: any

    try {
        switch(method) {
            case "POST":
                response = await crear(body)
                return res.status(200).json({ message: "Creando Detalle de Compra", results: response.rows })
            case "GET":
                response = await buscar(body)
                return res.status(200).json({ message: "Obteniendo Detalles de Compras", results: response.rows })
            case "PUT":
                response = await actualizar(body)
                return res.status(200).json({ message: "Actualizando Detalle de Compra", results: response.rows })
            case "DELETE":
                response = await crear(body)
                return res.status(200).json({ message: "Eliminando Detalle de Compra", results: response.rows })
            default:
                return res.status(404).json({ message: "No se obtuvieron resultados", results: [] })
        }
    } catch(error) {
        return res.status(404).json({ message: (error as Error).message, results: [] })
    }
}