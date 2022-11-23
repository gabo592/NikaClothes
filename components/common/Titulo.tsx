import { FC } from "react"
import style from "../../styles/Titulo.module.css"

interface TituloProps {
    children: string
}

const Titulo: FC<TituloProps> = ({ children }): JSX.Element => {
    return (
        <h1 className={style.titulo}>{children}</h1>
    )
}

export default Titulo