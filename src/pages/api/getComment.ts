import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { Comment } from '../../../Typing'

const commentsQuery = groq`
*[_type == "comment" && references(*[_type== "tweet" && _id == $tweetId]._id)] {
  _id,
  ...
} | order(_createdAt desc)
`

type Data = Comment[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {tweetId} = req.query

  res.status(200).json({ name: 'John Doe' })
}
