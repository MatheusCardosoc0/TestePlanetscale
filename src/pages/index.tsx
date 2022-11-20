import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-gray-800 overflow-hidden max-h-screen'>
      <Head>
        <title>RainbowAsk</title>
      </Head>

      <main className='grid grid-cols-9 lg:col-span-7 overflow-hidden pt-4 lg:max-w-[100rem] mx-auto'>
        
        <Sidebar />
        <Feed />
        <Widgets />

      </main>
    </div>
  )
}

export default Home
