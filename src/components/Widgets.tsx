import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

const Widgets = () => {
  return (
    <div className='p-2 col-span-2'>
      <TwitterTimelineEmbed
        sourceType="profile"
        borderColor={"blue"}
        noBorders={false}
        noScrollbar={true}
        linkColor='#ffff00'
        theme="dark"
        screenName="elonmusk"
        options={{ height: 1000 }}
      />
    </div>
  )
}

export default Widgets