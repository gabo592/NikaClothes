import Head from "next/head"
import NavBar from "../components/common/NavBar"

const Shop = () => {
    return(
        <div>
            <Head>
                <title>NikaClothes - Shop</title>
                <meta name="description" content="Página principal de NikaClothes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
        </div>
    )
}

export default Shop