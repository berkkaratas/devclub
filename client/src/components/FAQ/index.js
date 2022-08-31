import React from 'react'
import Footer from '../Home/Footer'
import Header from '../Home/Header'

export default function FAQ() {
  return (
     <div className=' bg-gray-900 ' >
          <Header />
     <div className="space-y-4  max-w-5xl px-4 pt-16 pb-8 mx-auto" >
          <details className="group" open>
          <summary
          className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-pink-500"
          >
          <h5 className="font-medium text-white">
               Lorem ipsum dolor sit amet consectetur adipisicing?
          </h5>
     
          <svg
               className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
          >
               <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M19 9l-7 7-7-7"
               />
          </svg>
          </summary>
     
          <p className="px-4 mt-4 leading-relaxed text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
          </p>
          </details>
          <details className="group">
          <summary
          className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-pink-500"
          >
          <h5 className="font-medium text-white">
               Lorem ipsum dolor sit amet consectetur adipisicing?
          </h5>
     
          <svg
               className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
          >
               <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M19 9l-7 7-7-7"
               />
          </svg>
          </summary>
     
          <p className="px-4 mt-4 leading-relaxed text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
          </p>
          </details>
          <details className="group">
          <summary
          className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-pink-500"
          >
          <h5 className="font-medium text-white">
               Lorem ipsum dolor sit amet consectetur adipisicing?
          </h5>
     
          <svg
               className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
          >
               <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M19 9l-7 7-7-7"
               />
          </svg>
          </summary>
     
          <p className="px-4 mt-4 leading-relaxed text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
          </p>
          </details>
   </div>
     <Footer></Footer>
   </div>
   
  )
}
