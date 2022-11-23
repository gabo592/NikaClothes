import { FC } from "react"
import style from "../../styles/Quotes.module.css"

interface QuotesProps {
    children: string
}

const Quotes: FC<QuotesProps> = ({ children }): JSX.Element => {
    return(
        <q className={style.quote}>{children}</q>
    )
}

export default Quotes