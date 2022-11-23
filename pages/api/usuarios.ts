import type { NextApiRequest, NextApiResponse } from "next"
import connection from "../../utils/Database"

interface Usuario {
    Id: Number | null,
    Nombre: string | null,
    Clave: string | null,
    Rol: string | null,
    Estado: boolean | null,
    IdEmpleado: Number | null
}

type Data = {
    message: string,
    results: Usuario[]
}

const crear = async (values: Usuario): Promise<any> => {
    let { Nombre, Clave, Rol, IdEmpleado } = values

    Nombre = !Nombre ? null : `'${Nombre}'`
    Clave = !Clave ? null : `'${Clave}'`
    Rol = !Rol ? null : `'${Rol}'`
    IdEmpleado = !IdEmpleado ? null : IdEmpleado

    const response = await connection.query(`SELECT * FROM "Seguridad"."USUARIO_CREATE"(${Nombre}, ${Clave}, ${Rol}, ${IdEmpleado})`)

    return response
}

const buscar = async (values: Usuario): Promise<any> => {
    let { Id, Nombre, Clave, Rol, Estado, IdEmpleado } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : `'${Nombre}'`
    Clave = !Clave ? null : `'${Clave}'`
    Rol = !Rol ? null : `'${Rol}'`
    Estado = !Estado ? null : Estado
    IdEmpleado = !IdEmpleado ? null : IdEmpleado

    const response = await connection.query(`SELECT * FROM "Seguridad"."USUARIO_READ"(${Id}, ${Nombre}, ${Rol}, ${Estado}, ${IdEmpleado})`)

    return response
}

const actualizar = async (values: Usuario): Promise<any> => {
    let { Id, Nombre, Clave, Rol, IdEmpleado } = values

    Id = !Id ? null : Id
    Nombre = !Nombre ? null : `'${Nombre}'`
    Clave = !Clave ? null : `'${Clave}'`
    Rol = !Rol ? null : `'${Rol}'`
    IdEmpleado = !IdEmpleado ? null : IdEmpleado

    const response = await connection.query(`SELECT * FROM "Seguridad"."USUARIO_UPDATE"(${Id}, ${Nombre}, ${Clave}, ${Rol}, ${IdEmpleado})`)

    return response
}

const eliminar = async (values: Usuario): Promise<any> => {
    let { Id } = values

    Id = !Id ? null : Id

    const response = await connection.query(`SELECT * FROM "Seguridad"."USUARIO_DELETE"(${Id})`)

    return response
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method, body } = req
    const { Rol } = body

    let response: any

    try {
        switch (method) {
            case "POST":

                if (Rol !== "Administrador" && Rol !== "Seguridad") {
                    return res.status(404).end()
                }

                response = await crear(body)

                return res.status(200).json({ message: "Creando Usuario", results: [] })   

            case "GET":

                if (Rol !== "Administrador" && Rol !== "Seguridad") {
                    return res.status(404).end()
                }

                response = await buscar(body)

                return res.status(200).json({ message: "Obteniendo Usuarios", results: [] })

            case "PUT":

                if (Rol !== "Administrador" && Rol !== "Seguridad") {
                    return res.status(404).end()
                }

                response = await actualizar(body)

                return res.status(200).json({ message: "Actualizando Usuario", results: [] })

            case "DELETE":

                if (Rol !== "Administrador" && Rol !== "Seguridad") {
                    return res.status(404).end
                }

                response = await eliminar(body)

                return res.status(200).json({ message: "Eliminando Usuario", results: [] })

            default:
                return res.status(404).end()
        }
    } catch (error) {
        return res.status(404).json({ message: (error as Error).message, results: [] })
    }
}