import Image from "next/image"
import logo from "../../public/assets/images/logo.png"
import style from "../../styles/Home.module.css"

const Logo = (): JSX.Element => {
    return(
        <Image src={logo} alt={"Logo de NikaClothes"} className={style.logo}></Image>
    )
}

export default Logo