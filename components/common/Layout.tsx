import { FC } from "react"
import style from "../../styles/Layout.module.css"

interface LayoutProp {
    children: any
}

const Layout: FC<LayoutProp> = ({ children }): JSX.Element => {
    return(
        <div className={style.layout}>
            <div className={style.contenedor}>
                {children}
            </div>
        </div>
    )
}

export default Layout