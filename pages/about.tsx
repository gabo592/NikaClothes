import Head from "next/head"
import NavBar from "../components/common/NavBar"

const About = () => {
    return(
        <div>
            <Head>
                <title>NikaClothes - About</title>
                <meta name="description" content="Página principal de NikaClothes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
        </div>
    )
}

export default About