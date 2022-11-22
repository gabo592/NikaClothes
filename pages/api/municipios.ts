import type { NextApiRequest, NextApiResponse } from "next"
import connection from "../../utils/Database"

type Data = {
    message: string,
    results: object[]
}

interface Municipio {
    Id: Number | null,
    Nombre: string | null,
    IdDepartamento: Number | null
}

const buscar = async (values: Municipio): Promise<any> => {
    let { Id, Nombre, IdDepartamento } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : `'${Nombre}'`
    IdDepartamento = !IdDepartamento ? null : IdDepartamento

    const response = await connection.query(`SELECT * FROM "Ubicacion"."MUNICIPIO_READ"(${Id}, ${Nombre}, ${IdDepartamento})`)
    
    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req

    try{
        switch(method) {
            case "GET":
                const response = await buscar(body)
                return res.status(200).json({ message: "Obteniendo municipios", results: response.rows })
            default:
                return res.status(404).json({ message: "No se obtuvieron resultados", results: [] })
        }
    } catch(error) {
        return res.status(404).json({ message: (error as Error).message, results: [] })
    }
}