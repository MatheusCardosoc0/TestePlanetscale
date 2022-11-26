import React, { useEffect, useState } from 'react'
import { Comment, Tweet } from '../../Typing'
import Timeago from 'react-timeago'
import { HiChatAlt2, HiHeart, HiSwitchHorizontal, HiUpload } from 'react-icons/hi'
import { fetchComments } from '../utils/fetchComments'

interface TweetComponentProps {
  tweet: Tweet
}

const TweetComponent = ({ tweet }: TweetComponentProps) => {

  const [commentTweets, setCommentsTweets] = useState<Comment[]>([])
  const [hideCommentBox, setHideCommentBox] = useState<boolean>(false)

  const refreshComponents = async () => {
    const comments: Comment[] = await fetchComments(tweet._id)

    setCommentsTweets(comments)
  }

  useEffect(() => {
    refreshComponents()
  }, [])


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


      <div className='flex justify-between text-4xl px-8 py-2 mb-8'>
        <button className='hover:text-blue-500 flex'>
          <HiChatAlt2 onClick={() => setHideCommentBox(!hideCommentBox)} />
          <p>{commentTweets?.length}</p>
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


      {commentTweets.length > 0 &&
        <div className='overflow-y-scroll not-scroll flex flex-col gap-2 mx-auto h-[200px]'>
          {commentTweets.map(comment => (
            <div key={comment._id}
              className='flex items-center gap-2 p-2 bg-blue-800/60 my-2 rounded-2xl space-y-2 relative'>

                <hr className='absolute h-20 border-x-4 border-blue-500 top-[80px] left-10 z-[-1] ' />

              <img src={comment.profileImg} alt={comment.username} className='w-[75px] h-[75px] rounded-full' />
              <div className=''>
                <p className='inline font-bold text-xl'>{comment.username}</p>
                <p className='inline mx-2'>@{comment.username.replace(/\s+/g, '').toLowerCase()}</p>
                <Timeago className='inline' date={comment._createdAt} />

                <p className='mt-2 text-xl'>{comment.comment}</p>
              </div>

            </div>
          ))}
        </div>}

    </section>
  )
}

export default TweetComponent