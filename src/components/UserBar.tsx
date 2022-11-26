import { useSession } from 'next-auth/react'
import React, { MouseEvent, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { HiCalendar, HiEmojiHappy, HiLocationMarker, HiPhotograph, HiSearch } from 'react-icons/hi'
import { json } from 'stream/consumers'
import { Tweet, TweetBody } from '../../Typing'
import { fetchTweets } from '../utils/fetchTweet'

interface UserBarProps {
  tweet: string
  setTweet: React.Dispatch<React.SetStateAction<string>>
  setRefreshTweet: React.Dispatch<React.SetStateAction<Tweet[]>>
}

const UserBar = ({ setTweet, tweet, setRefreshTweet }: UserBarProps) => {

  const { data: session } = useSession()
  const [imageUrlBoxOpen, setImageUrlBoxOpen] = useState<boolean>(false)
  const [image, setImage] = useState<string>('')

  const imageRef = useRef<HTMLInputElement>(null)

  function addImageFromTwitter(e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    e.preventDefault()

    if (!imageRef.current?.value) return

    setImage(imageRef.current.value)

    imageRef.current.value = ''

    setImageUrlBoxOpen(false)
  }

  const postTweet = async () => {
    const tweetInfo: TweetBody = {
      text: tweet,
      username: session?.user?.name || 'usuario',
      profileImg: session?.user?.image || 'https://Links.papareact.com/gll',
      image: image
    }

    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(tweetInfo),
      method: 'POST'
    })

    
    const json = await result.json()

    

    const newTweets = await fetchTweets()
    setRefreshTweet(newTweets)

    toast.success('e')

    return json
  }

  const handleSubmit = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {

    e.preventDefault()

    postTweet()

    setTweet('')
    setImage('')
    setImageUrlBoxOpen(false)
  }



  return (
    <div className='flex gap-3 bg-blue-800 p-1 rounded-t-xl'>
      <img className='h-24 w-24 object-cover rounded-full border-4  border-black ' src={session?.user?.image || 'http://links.papareact.com/gll'} width={0} height={0} alt="" />

      <div className='flex flex-1 items-center pl-2'>
        <form className='flex flex-1 justify-between px-4 flex-col w-full'>



          <input className='w-[300px] p-2 rounded-lg bg-black text-blue-300 placeholder:text-blue-300 text-lg'
            type={"text"} placeholder="No que está pensando?"
            value={tweet}
            onChange={e => setTweet(e.target.value)} />
          <div className='flex justify-between w-full'>
            <div className='flex flex-1 space-x-2 mt-4 text-2xl text-black pl-2'>
              <HiPhotograph onClick={() => setImageUrlBoxOpen(!imageUrlBoxOpen)} className='hover:text-blue-300 cursor-pointer' />
              <HiSearch className='hover:text-blue-300 cursor-pointer' />
              <HiEmojiHappy className='hover:text-blue-300 cursor-pointer' />
              <HiCalendar className='hover:text-blue-300 cursor-pointer' />
              <HiLocationMarker className='hover:text-blue-300 cursor-pointer' />
            </div>


            <button
              className='p-2 bg-zinc-900/80 rounded-lg text-xl px-4 text-blue-500 hover:brightness-150 disabled:opacity-40'
              disabled={!tweet || !session}
              onClick={handleSubmit}>
              Tweet
            </button>
          </div>

          {imageUrlBoxOpen && (
            <form className='mt-2 p-2 flex justify-between gap-2 bg-gray-900 rounded-lg w-3/5'>
              <input className='w-1/2 rounded-xl bg-transparent placeholder:text-blue-500 px-1 outline-none text-white' placeholder='Url da imagem...'
                ref={imageRef} />
              <button type='submit' onClick={addImageFromTwitter} className={`p-1 bg-blue-600 rounded-lg text-white`}>Adicionar imagem</button>
            </form>
          )}

          {image && (
            <img className='w-[200px] rounded-xl shadow-xl my-4' src={image} alt='' />
          )}

        </form>
      </div>


    </div>
  )
}

export default UserBar