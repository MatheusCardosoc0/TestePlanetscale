import React from 'react'
import { Tweet } from '../../Typing'
import Timeago from 'react-timeago'
import { HiChatAlt2, HiHeart, HiSwitchHorizontal, HiUpload } from 'react-icons/hi'

interface TweetComponentProps {
  tweet: Tweet
}

const TweetComponent = ({ tweet }: TweetComponentProps) => {
  return (
    <section className='flex flex-col my-12 mx-12 border-l-[6px] border-t-[6px] border-blue-500 bg-blue-900/30 backdrop-blur-2xl p-2 rounded-xl text-gray-200 border-l-blue-600 '>
      <div className='flex items-center gap-4 w-full'>
        <img className='rounded-full w-[100px] h-[100px] bg-cover'
          src={tweet.profileImg} alt={tweet.username} />
        <div className='items-center gap-2 w-full' >
          <p className='text-2xl inline font-semibold'>{tweet.username}</p>

          <p className='hidden sm:inline mx-2'>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>
          <Timeago className=' text-sm inline mx-2' date={tweet._createdAt} />


          <p className='text-xl my-2'>{tweet.text}</p>
        </div>
      </div>

      {tweet.image &&
        <img className='mx-auto h-[400px] p-4' src={tweet.image} />}

      
      <div className='flex justify-between text-4xl px-8 py-2'>
        <button className='hover:text-blue-500 flex'>
          <HiChatAlt2 />
          <p>5</p>
        </button>
        <button className='hover:text-blue-300'>
          <HiSwitchHorizontal />
        </button>
        <button className='hover:text-blue-500'>
          <HiHeart />
        </button>
        <button className='hover:text-blue-500'>
          <HiUpload />
        </button>
      </div>

    </section>
  )
}

export default TweetComponent