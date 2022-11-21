import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/common/NavBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NikaClothes</title>
        <meta name="description" content="Página principal de NikaClothes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
    </div>
  )
}
