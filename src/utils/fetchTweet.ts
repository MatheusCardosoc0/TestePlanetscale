import { Tweet } from "../../Typing"

export const fetchTweets = async () => {
  const res = await fetch(`https://twitter-clone-omega-drab.vercel.app/api/getTweets`)

  const data = await res.json()
  const tweets: Tweet[] = data.tweets;

  return tweets
}