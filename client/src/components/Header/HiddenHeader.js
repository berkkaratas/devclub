import React from 'react'

export default function HiddenHeader() {
  return (
     <div className="lg:hidden">
     <button className="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
       <span className="sr-only">Open menu</span>
       <svg
         aria-hidden="true"
         className="w-5 h-5"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
       >
         <path
           d="M4 6h16M4 12h16M4 18h16"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
         />
       </svg>
     </button>
   </div>
  )
}
