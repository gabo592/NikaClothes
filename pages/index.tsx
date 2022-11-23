import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/common/NavBar'
import Titulo from '../components/common/Titulo'
import Layout from '../components/common/Layout'
import Parrafo from '../components/common/Parrafo'
import Quotes from '../components/common/Quotes'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NikaClothes</title>
        <meta name="description" content="Página principal de NikaClothes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <Layout>
        <Titulo>Inicio</Titulo>
        <Parrafo>Hey :D, bienvenido y gracias por estar acá.</Parrafo>
        <Parrafo>Estamos comprometidos con entregarte un producto de calidad y sobre todo, de tu preferencia, ven puedes ver la sección de SHOP para ver nuestro catalogo de productos. Si gustas ver nuestros productos en fisico, pudes visitarnos de los Semaforos de Villa Progreso 2 cuadras al este, te estaremos esperando :D.</Parrafo>
        <Parrafo>Mmm... ¿No te convence ninguno de nuestros productos?
        Tranquilo :D, has un pedido personalizado, recuerda que...</Parrafo>
        <Quotes>Lo mas importante de vestir, es un sonrisa</Quotes>
        <Parrafo>-Ann Taylor</Parrafo>
      </Layout>
    </div>
  )
}
