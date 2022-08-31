import React from 'react'
import { Link } from 'react-router-dom'

export default function Connections() {
  return (
     <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
     <div>
       <strong className="text-sm font-bold tracking-wide text-white uppercase">
         Servisler
       </strong>
 
       <nav className="flex flex-col mt-6 space-y-1 text-gray-400">
         <Link className="transition hover:text-white" to="/blog"> Blog </Link>
         <Link className="transition hover:text-white" to="/support"> Destek Kanalı </Link>
         <Link className="transition hover:text-white" to="/teams"> Takım Bul </Link>
         <Link className="transition hover:text-white" to="/mentorship"> Mentorluk </Link>
       </nav>
     </div>
 
     <div>
       <strong className="text-sm font-bold tracking-wide text-white uppercase">
         Hakkımızda
       </strong>
 
       <nav className="flex flex-col mt-6 space-y-1 text-gray-400">
         <Link className="transition hover:text-white" to="/about"> FeDevClub </Link>
         <Link className="transition hover:text-white" to="/jobs"> Kariyer </Link>
         <Link className="transition hover:text-white" to="/board"> Yönetim Kurulu </Link>
         <Link className="transition hover:text-white" to="/terms">
           Çerezler ve Gizlilik
         </Link>
       </nav>
     </div>
 
     <div>
       <strong className="text-sm font-bold tracking-wide text-white uppercase">
         Destek
       </strong>
 
       <nav className="flex flex-col mt-6 space-y-1 text-gray-400">
         <Link className="transition hover:text-white" to="/FAQ"> S.S.S. </Link>
         <Link className="transition hover:text-white" to="/contact"> İletişim </Link>
         <Link className="transition hover:text-white" to="/feedback"> Geri Bildirim </Link>
       </nav>
     </div>
   </div>
  )
}
