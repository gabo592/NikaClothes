import Logo from "./Logo"
import Link from "next/link"
import style from "../../styles/Home.module.css"

const NavBar = (): JSX.Element => {
    return(
        <nav className={style.navbar}>
            <Logo></Logo>
            <Link href={"/"}>Home</Link>
            <Link href={"/shop"}>Tienda</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/login"}>Iniciar Sesión</Link>
        </nav>
    )
}

export default NavBar