import React from 'react'
import Navbar from './Navbar'
import HiddenHeader from './HiddenHeader'
import Login from './Login'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
          <div className="bg-gray-900 border-b border-gray-700 shadow-sm">
               <div className="max-w-screen-xl p-4 mx-auto">
                    <div className="flex items-center justify-between space-x-4 lg:space-x-10">
                    <div className="flex lg:w-0 lg:flex-1">
                    <Link to="/" className="w-20 h-10 font-medium text-white sm:text-3xl rounded-lg">FeDevClub</Link>
                    </div>
                    <Navbar />
                    <Login />
                    <HiddenHeader/>
                    </div>
               </div>
          </div>
  )
}
