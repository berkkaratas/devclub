import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import { Link } from 'react-router-dom'

export default function Applications() {
  return (
    <div className=" bg-gray-900">
      <Header></Header>
      <div className="mx-auto  px-64 py-32  text-white rounded-lg shadow-2xl">
          <h2 className="ml-64 text-lg font-bold">Başvuru bulunamadı!</h2>

          <p className="ml-64 mt-2 text-sm ">
            Henüz aktif bir başvuru bulunmuyor. 
          </p>

          <div className="flex items-center mr-72 justify-end mt-8 text-xs">
            <Link to="/" className="px-4 py-2 font-medium text-gray-700 rounded bg-pink-200">Anasayfaya dön</Link>
          </div>
        </div>
        <Footer></Footer>

    </div>
  )
}
