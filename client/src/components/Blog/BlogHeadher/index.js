import React from 'react'
import HiddenHeader from '../../Home/Header/HiddenHeader'
import Login from '../../Home/Header/Login'
import { Link } from 'react-router-dom'


export default function BlogHeadher() {
  return (
     <div className="bg-gray-900 border-b border-gray-700 fixed w-full  top-0  shadow-sm">
               <div className="max-w-screen-xl p-4 mx-auto">
                    <div className="flex items-center justify-between space-x-4 lg:space-x-10">
                    <div className="flex lg:w-0 fixed top-4 left-16 lg:flex-1">
                         <Link to="/" className="w-20 h-10 font-medium text-white sm:text-3xl rounded-lg">FeDevClub</Link>
                    </div>
                    <Login className="fixed right-16"/>
                    <HiddenHeader className="fixed right-16"/>
                    </div>
               </div>
          </div>
  )
}
