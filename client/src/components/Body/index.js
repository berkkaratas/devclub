import React from 'react'
import  BodyContent from './BodyContent.js'
import  BodyGoNow from './BodyGoNow.js'
import  BodyText from './BodyText.js'

export default function Body() {
  return (
     <section className="text-white bg-gray-900">
     <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <BodyText />
          <BodyContent />
          <BodyGoNow />
     </div>
   </section>
  )
}
