import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'

export default function Contact() {
  return (
     <div className="bg-gray-900">
     <Header></Header>

     <section className="bg-gray-900 mt-16 ">
     <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 ">
       <div className="grid grid-cols-1 gap-x-16 gap-y-8 mx-auto ">
          
          <div className="p-4 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3 ">
          <form action="" className="space-y-4">
               <div>
               <label className="sr-only" htmlFor="name">İsim</label>
               <input className="w-full p-3 border-2 text-sm border-gray-200 rounded-lg" placeholder="İsim" type="text" id="name" />
               </div>

               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
               <div>
               <label className="sr-only" htmlFor="email">Eposta</label>
               <input
                    className="w-full p-3 border-2 text-sm border-gray-200 rounded-lg"
                    placeholder="Eposta"
                    type="email"
                    id="email"
               />
               </div>

               <div>
               <label className="sr-only" htmlFor="phone">Telefon Numarası</label>
               <input
                    className="w-full p-3 border-2 text-sm border-gray-200 rounded-lg"
                    placeholder="Telefon Numarası"
                    type="tel"
                    id="phone"
               />
               </div>
               </div>


               <div>
                    <label className="sr-only" htmlFor="message">Message</label>
                    <textarea
                    className="w-full p-3 text-sm border-2 border-gray-200 rounded-lg"
                    placeholder="Mesajınız"
                    rows="8"
                    id="message"
                    ></textarea>
               </div>

               <div className="mt-4">
               <button
               type="submit"
               className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-pink-400 rounded-lg sm:w-auto"
               >
               <span className="font-medium"> Gönder </span>

               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
               >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
               </svg>
               </button>
               </div>
          </form>
          </div>
     </div>
     </div>
          <Footer></Footer>
     </section>

    </div>
  )
}
