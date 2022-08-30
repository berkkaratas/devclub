import React from 'react'
import EmailSubs from './EmailSubs'
import Social from './Social'
import Connections from './Connections'
import FooterBrand from './FooterBrand'

export default function Footer() {
  return (
     <footer className="bg-gray-900">
          <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8">
               <EmailSubs />
          <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2 lg:gap-32">
                <Social></Social>
                <Connections></Connections>
          </div>
               <FooterBrand></FooterBrand>
          </div>
   </footer>
  )
}
