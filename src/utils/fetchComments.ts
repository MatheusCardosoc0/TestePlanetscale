import { Comment } from "../../Typing"

export async function fetchComments(tweetId: string) {
 const res = await fetch(`/api/getComment?tweetId=${tweetId}`)

 const comments: Comment[] = await res.json()

 return comments
}