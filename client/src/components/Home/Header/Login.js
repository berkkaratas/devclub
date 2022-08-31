import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
     <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
          
          <Link className="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg" to="login">Giriş Yap</Link>
          <Link className="px-5 py-2 text-sm font-medium text-white bg-pink-500 rounded-lg" to="register">Kaydol</Link>
   </div>
  )
}
