import type { NextApiRequest, NextApiResponse } from "next"
import connection from "../../utils/Database"

type Data = {
    message: string,
    results: object[]
}

const buscar = async (id: Number, nombre: string | null, idDepartamento: Number) => {
    nombre = !nombre ? null : `'${nombre}'`

    const response = await connection.query(`SELECT * FROM "Ubicacion"."MUNICIPIO_READ"(${id}, ${nombre}, ${idDepartamento})`)
    
    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req
    const { Id, Nombre, IdDepartamento } = body

    switch(method) {
        case "GET":
            const response = await buscar(Id, Nombre, IdDepartamento)
            return res.status(200).json({ message: "Obteniendo municipios", results: response.rows })
        default:
            return res.status(404).json({ message: "No se obtuvieron resultados", results: [] })
    }
}