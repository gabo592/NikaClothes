import Logo from "./Logo"
import Link from "next/link"
import style from "../../styles/Home.module.css"

const NavBar = (): JSX.Element => {
    return(
        <nav className={style.navbar}>
            <div className={style.logoContainer}>
                <Logo></Logo>
            </div>
            <Link href={"/"} className={style.links}>Home</Link>
            <Link href={"/shop"} className={style.links}>Tienda</Link>
            <Link href={"/about"} className={style.links}>About</Link>
            <Link href={"/login"} className={style.links}>Iniciar Sesión</Link>
        </nav>
    )
}

export default NavBar