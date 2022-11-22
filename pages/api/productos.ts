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
    Foto: ImageBitmap | null
}

