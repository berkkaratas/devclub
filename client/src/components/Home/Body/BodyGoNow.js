import React from 'react'

export default function BodyGoNow() {
  return (
     <div className="mt-12 text-center">
     <a
       className="
         inline-flex
         items-center
         px-8
         py-3
         mt-8
         text-white
         bg-pink-600
         border border-pink-600
         rounded
         hover:bg-transparent
         active:text-pink-500
         focus:outline-none focus:ring
       "
       href="/login"
     >
       <span className="text-sm font-medium"> Harekete Geç </span>
 
       <svg
         className="w-5 h-5 ml-3"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M17 8l4 4m0 0l-4 4m4-4H3"
         />
       </svg>
     </a>
   </div>
  )
}
