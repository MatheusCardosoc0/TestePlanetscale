import React from 'react'
import { HiCalendar, HiEmojiHappy, HiLocationMarker, HiPhotograph, HiSearch } from 'react-icons/hi'

interface UserBarProps{
  tweet: string
  setTweet: React.Dispatch<React.SetStateAction<string>>
}

const UserBar = ({setTweet, tweet} : UserBarProps) => {
  return (
    <div className='flex items-center gap-3 bg-blue-800'>
      <img className='h-[150px] w-[150px] object-cover rounded-lg' src='http://links.papareact.com/gll' width={0} height={0} alt="" />

      <form className='flex justify-between px-4 flex-col w-full'>



        <input className='w-1/2 p-2 rounded-lg bg-black text-blue-300 placeholder:text-blue-300 text-lg'
          type={"text"} placeholder="No que está pensando?"
          value={tweet}
          onChange={e => setTweet(e.target.value)} />
        <div className='flex justify-between w-full'>
          <div className='flex flex-1 space-x-2 mt-4 text-2xl text-black pl-2'>
            <HiPhotograph className='hover:text-blue-300 cursor-pointer' />
            <HiSearch className='hover:text-blue-300 cursor-pointer' />
            <HiEmojiHappy className='hover:text-blue-300 cursor-pointer' />
            <HiCalendar className='hover:text-blue-300 cursor-pointer' />
            <HiLocationMarker className='hover:text-blue-300 cursor-pointer' />
          </div>


          <button className='p-2 bg-zinc-900/80 rounded-lg text-xl px-4 text-blue-500 hover:brightness-150 disabled:opacity-40'
            disabled={!tweet}>
            Tweet
          </button>
        </div>
      </form>


    </div>
  )
}

export default UserBar