import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Tweet } from '../../Typing'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import TweetComponent from '../components/TweetComponent'
import Widgets from '../components/Widgets'
import styles from '../styles/Home.module.css'
import { fetchTweets } from '../utils/fetchTweet'


interface Props{
  tweets: Tweet[]
}

const Home = ({tweets}: Props) => {
  return (
    <div className='bg-gray-800 overflow-hidden max-h-screen'>
      <Head>
        <title>Twitter2</title>
      </Head>

      <main className='grid grid-cols-9 lg:col-span-7 overflow-hidden pt-4 lg:max-w-[100rem] mx-auto'>
        
        <Sidebar />
        <Feed >
          {tweets.map(tweet => {
            return (
              <TweetComponent key={tweet._id} tweet={tweet} />
            )
          })}
        </Feed>
        <Widgets />

      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const tweets = await fetchTweets()

  return {
    props: {
      tweets,
    }
  }
}
