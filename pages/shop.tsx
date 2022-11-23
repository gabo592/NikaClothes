import Head from "next/head"
import Layout from "../components/common/Layout"
import NavBar from "../components/common/NavBar"
import Titulo from "../components/common/Titulo"
import Productos from "../components/shop/Productos"

interface Producto {
    Nombre: string,
    Imagen: string,
    Tallas: string[],
    Precio: Number
}

const productos: Producto[] = [
    { Nombre: "Camiseta Bart Simpson", Imagen: "/assets/images/camiseta-bs.jpg", Tallas: ["S", "M"], Precio: 100 },
    { Nombre: "Camiseta Rick & Morty", Imagen: "/assets/images/camiseta-rm.jpg", Tallas: ["S", "M", "L", "XL"], Precio: 150 },
    { Nombre: "Short Bob Esponja", Imagen: "/assets/images/short-bs.jpg", Tallas: ["S"], Precio: 70 },
    { Nombre: "Short Los Simpsons", Imagen: "/assets/images/short-ls.jpg", Tallas: ["M"], Precio: 80 },
    { Nombre: "Short Monstruo Come Galletas", Imagen: "/assets/images/short-mcg.jpg", Tallas: ["S"], Precio: 80 },
    { Nombre: "Sudadera Sasuke", Imagen: "/assets/images/sudadera-nrt.jpg", Tallas: ["M", "L"], Precio: 80 }
]

const Shop = () => {
    return(
        <div>
            <Head>
                <title>NikaClothes - Shop</title>
                <meta name="description" content="Página principal de NikaClothes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
            <Layout>
                <Titulo>Tienda</Titulo>
                <Productos productos={productos}></Productos>
            </Layout>
        </div>
    )
}

export default Shop