import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>RainbowAsk</title>
      </Head>

      <main>
        
        <Sidebar />
        <Feed />
        <Widgets />

      </main>
    </div>
  )
}

export default Home
