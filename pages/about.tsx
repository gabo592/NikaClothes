import Head from "next/head"
import Layout from "../components/common/Layout"
import NavBar from "../components/common/NavBar"
import Parrafo from "../components/common/Parrafo"
import SubTitulo from "../components/common/SubTitulo"
import Titulo from "../components/common/Titulo"

const About = () => {
    return(
        <div>
            <Head>
                <title>NikaClothes - About</title>
                <meta name="description" content="Página principal de NikaClothes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
            <Layout>
                <Titulo>Acerca de</Titulo>
                <SubTitulo>Historia de NikaClothes</SubTitulo>
                <Parrafo>NikaClothes tuvo sus inicios en la sublimación de gorras a petición de clientes, donde cada persona solicitaba un diseño y este se impregnaba en su gorra, posterior a ello, en 2018 toma la decisión de cambiar la forma de trabajo, y el giro de negocio del mismo, por lo que, el dueño del negocio Licenciado Mario del Pilar, decide empezar la confección y sublimación de camisas, basados en el contenido que se encuentre en trending en las redes sociales, a partir de esta idea, nace un nuevo y mejorado NikaClothes.</Parrafo>
                <SubTitulo>Misión</SubTitulo>
                <Parrafo>Somos un negocio que trabaja de la mano con sus clientes, creando una conexión cliente-empresa en la que este se pueda sentir identificado con los diseños de sus prendas.</Parrafo>
                <SubTitulo>Visión</SubTitulo>
                <Parrafo>Lograr el reconocimiento de la marca a nivel nacional y junto a ello expandirse de forma tal que sea una organización estable y como marca pueda entrar en competitividad con otras marcas nacionales y extranjeras.</Parrafo>
                <SubTitulo>Valores</SubTitulo>
                <SubTitulo>Trabajo en equipo</SubTitulo>
                <Parrafo>Es importante para nosotros como empresa, fomentar el trabajo en equipo, puesto que cada colaborador de la compañía hace un aporte al cumplimiento de los objetivos pretendidos alcanzar en conjunto como un equipo de trabajo.</Parrafo>
                <SubTitulo>Aprendizaje</SubTitulo>
                <Parrafo>Como empresa estamos en constante mejora y desarrollo, por tal motivo que el aprendizaje es uno de los principales valores de la empresa, ya que impulsa a la innovación, dando paso a nuevas ideas que sean atractivas para clientes potenciales y clientes reales.</Parrafo>
                <SubTitulo>Inclusión</SubTitulo>
                <Parrafo>El trabajo en equipo es tan fundamental en la empresa, que va de la mano con la inclusión, pensando en todos para poder crear un ambiente sano, donde todos.</Parrafo>
                <SubTitulo>Responsabilidad</SubTitulo>
                <Parrafo>Este es uno de los valores característicos de la empresa, y que han formado la imagen que tiene la compañía día de hoy es por ello, que este valor es indispensable para todo personal que forme parte de la empresa.</Parrafo>
                <SubTitulo>Calidad</SubTitulo>
                <Parrafo>La calidad es un factor que ha destacado por parte de la compañía, no solo a nivel de producción, sino, completamente por su metodología de trabajo y las diversas áreas que componen la estructura organizativa de la empresa. </Parrafo>
            </Layout>
        </div>
    )
}

export default About