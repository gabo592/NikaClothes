import { FC } from "react"
import style from "../../styles/SubTitulo.module.css"

interface SubTituloProps {
    children: string
}

const SubTitulo: FC<SubTituloProps> = ({ children }): JSX.Element => {
    return(
        <h2 className={style.subTitulo}>{children}</h2>
    )
}

export default SubTitulo