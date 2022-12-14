import React from 'react'
import { Link } from 'react-router-dom'

export default function BodyContent() {
  return (
     <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
     <Link className="
         block
         p-8
         transition
         border border-gray-800
         shadow-xl
         rounded-xl
         hover:shadow-pink-500/10 hover:border-pink-500/10
       " to="/blog" >
     <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-10 h-10 text-pink-500"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path d="M12 14l9-5-9-5-9 5 9 5z" />
         <path
           d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
         />
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
         />
       </svg>
 
       <h3 className="mt-4 text-xl font-bold text-white">Blog</h3>
 
       <p className="mt-1 text-sm text-gray-300">
         Site içinde bulunan ve üye olan herkesin makale yayınlayabildiği
         etkileşimli sisteme dahil ol
       </p>
     </Link>
 
     <Link
       className="
         block
         p-8
         transition
         border border-gray-800
         shadow-xl
         rounded-xl
         hover:shadow-pink-500/10 hover:border-pink-500/10
       "
       to="/support"
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-10 h-10 text-pink-500"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path d="M12 14l9-5-9-5-9 5 9 5z" />
         <path
           d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
         />
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
         />
       </svg>
 
       <h3 className="mt-4 text-xl font-bold text-white">Destek Kanalı</h3>
 
       <p className="mt-1 text-sm text-gray-300">
         Öğrenirken veya çalışırken takıldığın problemlere destek bulabileceğin
         bir kanal
       </p>
     </Link>
 
     <Link
       className="
         block
         p-8
         transition
         border border-gray-800
         shadow-xl
         rounded-xl
         hover:shadow-pink-500/10 hover:border-pink-500/10
       "
       to="/mentorship"
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-10 h-10 text-pink-500"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path d="M12 14l9-5-9-5-9 5 9 5z" />
         <path
           d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
         />
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
         />
       </svg>
 
       <h3 className="mt-4 text-xl font-bold text-white">Mentorluk</h3>
 
       <p className="mt-1 text-sm text-gray-300">
         Mentor olmak istiyorsan hemen başvur!
       </p>
     </Link>
 
     <Link
       className="
         block
         p-8
         transition
         border border-gray-800
         shadow-xl
         rounded-xl
         hover:shadow-pink-500/10 hover:border-pink-500/10
       "
       to="/teams"
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-10 h-10 text-pink-500"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path d="M12 14l9-5-9-5-9 5 9 5z" />
         <path
           d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
         />
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
         />
       </svg>
 
       <h3 className="mt-4 text-xl font-bold text-white">Takımını Oluştur</h3>
 
       <p className="mt-1 text-sm text-gray-300">
         Ekibini oluşturmanın ve beraber proje geliştirmenin en hızlı yolu
       </p>
     </Link>
 
     <Link
       className="
         block
         p-8
         transition
         border border-gray-800
         shadow-xl
         rounded-xl
         hover:shadow-pink-500/10 hover:border-pink-500/10
       "
       to="/about"
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-10 h-10 text-pink-500"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path d="M12 14l9-5-9-5-9 5 9 5z" />
         <path
           d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
         />
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
         />
       </svg>
 
       <h3 className="mt-4 text-xl font-bold text-white">Kulüp Hakkında</h3>
 
       <p className="mt-1 text-sm text-gray-300">
         2022 yılında çalışmalarına başlayan FeDevClub hakkında daha fazla şey
         öğren
       </p>
     </Link>
 
     <Link
       className="
         block
         p-8
         transition
         border border-gray-800
         shadow-xl
         rounded-xl
         hover:shadow-pink-500/10 hover:border-pink-500/10
       "
        to="/faq"
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-10 h-10 text-pink-500"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path d="M12 14l9-5-9-5-9 5 9 5z" />
         <path
           d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
         />
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
         />
       </svg>
 
       <h3 className="mt-4 text-xl font-bold text-white">S.S.S.</h3>
 
       <p className="mt-1 text-sm text-gray-300">Sıkça sorulan sorulara göz at</p>
     </Link>
   </div>
  )
}
