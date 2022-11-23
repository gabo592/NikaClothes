import type { NextApiRequest, NextApiResponse } from "next"
import connection from "../../utils/Database"

type Data = {
    message: string,
    results: object[]
}

interface Producto {
    Id: Number | null,
    Nombre: string | null,
    Descripcion: string | null,
    Precio: Number | null,
    Tallas: string | null,
    Stock: Number | null,
    Foto: ImageBitmap | null,
    Estado: boolean | null,
    IdSubCategoria: Number | null
}

const crear = async (values: Producto): Promise<any> => {
    let {
        Nombre,
        Descripcion,
        Precio,
        Tallas,
        Stock,
        Foto,
        IdSubCategoria
    } = values

    Nombre = !Nombre ? null : `'${Nombre}'`
    Descripcion = !Descripcion ? null : `'${Descripcion}'`
    Precio = !Precio ? null : Precio
    Tallas = !Tallas ? null : `'${Tallas}'`
    Stock = !Stock ? null : Stock
    Foto = !Foto ? null : Foto
    IdSubCategoria = !IdSubCategoria ? null : IdSubCategoria

    const response = await connection.query(`SELECT * FROM "Inventario"."PRODUCTO_CREATE"(${Nombre}, ${Descripcion}, ${Precio}, ${Tallas}, ${Stock}, ${Foto}, ${IdSubCategoria})`)

    return response
}

const buscar = async (values: Producto): Promise<any> => {
    let {
        Id,
        Nombre,
        Descripcion,
        Precio,
        Tallas,
        Stock,
        Foto,
        Estado,
        IdSubCategoria
    } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : `'${Nombre}'`
    Descripcion = !Descripcion ? null : `'${Descripcion}'`
    Precio = !Precio ? null : Precio
    Tallas = !Tallas ? null : `'${Tallas}'`
    Stock = !Stock ? null : Stock
    Foto = !Foto ? null : Foto
    Estado = !Estado ? null : Estado
    IdSubCategoria = !IdSubCategoria ? null : IdSubCategoria

    const response = await connection.query(`SELECT * FROM "Inventario"."PRODUCTO_READ"(${Id}, ${Nombre}, ${Descripcion}, ${Precio}, ${Tallas}, ${Stock}, ${Estado}, ${IdSubCategoria})`)

    return response
}

const actualizar = async (values: Producto): Promise<any> => {
    let {
        Id,
        Nombre,
        Descripcion,
        Precio,
        Tallas,
        Stock,
        Foto,
        IdSubCategoria
    } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : `'${Nombre}'`
    Descripcion = !Descripcion ? null : `'${Descripcion}'`
    Precio = !Precio ? null : Precio
    Tallas = !Tallas ? null : `'${Tallas}'`
    Stock = !Stock ? null : Stock
    Foto = !Foto ? null : Foto
    IdSubCategoria = !IdSubCategoria ? null : IdSubCategoria

    const response = await connection.query(`SELECT * FROM "Inventario"."PRODUCTO_UPDATE"(${Id}, ${Nombre}, ${Descripcion}, ${Precio}, ${Tallas}, ${Stock}, ${Foto}, ${IdSubCategoria})`)

    return response
}

const eliminar = async (values: Producto): Promise<any> => {
    let { Id } = values

    Id = !Id ? null : Id

    const response = await connection.query(`SELECT * FROM "Inventario"."PRODUCTO_DELETE"(${Id})`)

    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req

    let response: any

    try {
        switch (method) {
            case "POST":
                response = await crear(body)
                return res.status(200).json({ message: "Creando Producto", results: response.rows })
            case "GET":
                response = await buscar(body)
                return res.status(200).json({ message: "Buscando Productos", results: response.rows })
            case "PUT":
                response = await actualizar(body)
                return res.status(200).json({ message: "Actualizando Producto", results: response.rows })
            case "DELETE":
                response = await eliminar(body)
                return res.status(200).json({ message: "Eliminando Producto", results: response.rows })
            default:
                return res.status(404).json({ message: "No se obtuvieron resultados", results: [] })
        }
    } catch (error) {
        return res.status(404).json({ message: (error as Error).message, results: [] })
    }
}