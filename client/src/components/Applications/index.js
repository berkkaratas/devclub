import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'

export default function Applications() {
  return (
    <div class=" bg-gray-900">
      <Header></Header>
      <div class="mx-auto  px-64 py-32  text-white rounded-lg shadow-2xl">
          <h2 class="ml-64 text-lg font-bold">Başvuru bulunamadı!</h2>

          <p class="ml-64 mt-2 text-sm ">
            Henüz aktif bir başvuru bulunmuyor. 
          </p>

          <div class="flex items-center mr-72 justify-end mt-8 text-xs">
            <button type="button" class="px-4 py-2 font-medium text-gray-700 rounded bg-pink-200">Anasayfaya dön</button>
          </div>
        </div>
        <Footer></Footer>

    </div>
  )
}
