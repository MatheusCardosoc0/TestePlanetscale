export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },

    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Img',
      type: 'string',
    },
    {
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference a twrrt',
      type: 'reference',
      to: {
        type: 'tweet'
      }
    }
  ],
}
