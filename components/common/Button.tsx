import { FC } from "react"
import style from "../../styles/Button.module.css"

interface ButtonProps {
    primary: boolean,
    big: boolean,
    children: string
}

const Button: FC<ButtonProps> = ({ primary, big, children }): JSX.Element => {
    let classList: string[] = []
    classList.push(style.button)
    classList.push(primary ? style.primary : "")
    classList.push(big ? style.big : "")

    return(
        <button className={classList.join(" ")}>{children}</button>
    )
}

export default Button