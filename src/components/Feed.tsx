/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import toast from 'react-hot-toast'
import { Tweet } from '../../Typing'
import { fetchTweets } from '../utils/fetchTweet'
import TweetComponent from './TweetComponent'
import UserBar from './UserBar'


interface FeedProps {
  tweets: Tweet[]
}

const Feed = ({ tweets: tweetsProp }: FeedProps) => {

  const [tweet, setTweet] = useState('')
  const [refreshTweet, setRefreshTweet] = useState<Tweet[]>(tweetsProp)

  const handleRefresh = async () => {

    const tweetRefreshed = toast.loading('Atualizando...')

    const tweets = await fetchTweets()

    setRefreshTweet(tweets)

    toast.success('Atualizado', {
      id: tweetRefreshed
    })
  }

  return (
    <section className='flex flex-col justify-between w-full h-screen  pt-12 p-2 rounded-t-2xl col-span-7 lg:col-span-5 '>
      <div className='flex justify-between w-full bg-gradient-to-tr from-gray-900 to-blue-800/40 rounded-3xl mb-8 p-4 text-4xl text-gray-200' >
        <h1 className='font-bold '>Pagina inicial</h1>
        <span className='cursor-pointer' onClick={handleRefresh} >Atualizar</span>
      </div>

      <div className='mt-12'>
        <UserBar setTweet={setTweet} tweet={tweet} setRefreshTweet={setRefreshTweet} />
      </div>

      <div className='w-full bg-gradient-to-tr from-gray-900 to-blue-800/40 h-screen overflow-auto not-scroll pb-40'>




        <div className=' flex flex-col mt-20'>
          {refreshTweet?.map(tweet => {
            return (
              <TweetComponent key={tweet._id} tweet={tweet} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Feed