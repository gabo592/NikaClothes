import connection from "../../utils/Database"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
    message: string,
    results: object[]
}

interface Departamento {
    Id: Number | null,
    Nombre: string | null
}

const buscar = async (values: Departamento): Promise<any> => {
    let { Id, Nombre } = values
    
    Id = !Id ? null : Id
    Nombre = !Nombre ? null : `'${Nombre}'`

    const response = await connection.query(`SELECT * FROM "Ubicacion"."DEPARTAMENTO_READ"(${Id}, ${Nombre})`)

    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req

    try{
        switch(method) {
            case "GET":
                const response = await buscar(body)
                return res.status(200).json({ message: "Obteniendo departamentos", results: response.rows })
            default:
                return res.status(404).json({ message: "No se obtuvieron resultados", results: [] })
        }
    } catch(error) {
        return res.status(404).json({ message: (error as Error).message, results: [] })
    }
}