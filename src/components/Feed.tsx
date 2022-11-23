/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import UserBar from './UserBar'


interface FeedProps {
  children: ReactNode
}

const Feed = ({ children }: FeedProps) => {

  const [tweet, setTweet] = useState('')

  return (
    <section className='flex flex-col justify-between w-full h-screen  pt-12 p-2 rounded-t-2xl col-span-7 lg:col-span-5 '>
      <div className='flex justify-between w-full bg-gradient-to-tr from-gray-900 to-blue-800/40 rounded-3xl mb-8 p-4 text-4xl text-gray-200' >
        <h1 className='font-bold '>Pagina inicial</h1>
        <span>Atualizar</span>
      </div>

      <div className='w-full bg-gradient-to-tr from-gray-900 to-blue-800/40 h-screen rounded-t-2xl overflow-auto not-scroll pb-40'>

        <div className='z-10 '>
          <UserBar setTweet={setTweet} tweet={tweet} />
        </div>


        <div className=' flex mt-20'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Feed