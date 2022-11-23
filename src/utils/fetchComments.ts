import { Comment } from "../../Typing"

export async function fetchComments(tweetId: string) {
 const res = await fetch(`/api/getComments?tweetId=${tweetId}`)

 const Comments: Comment = await res.json()

 return Comments
}