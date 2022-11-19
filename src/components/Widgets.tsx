import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

const Widgets = () => {
  return (
    <div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="michaeljackson"
        options={{ height: 400, width: 400 }}
      />
    </div>
  )
}

export default Widgets