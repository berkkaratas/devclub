import React from 'react'

export default function Connections() {
  return (
     <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
     <div>
       <strong className="text-sm font-bold tracking-wide text-white uppercase">
         Servisler
       </strong>
 
       <nav className="flex flex-col mt-6 space-y-1 text-gray-400">
         <a className="transition hover:text-white" href="/"> Blog </a>
         <a className="transition hover:text-white" href="/"> Destek Kanalı </a>
         <a className="transition hover:text-white" href="/"> Takım Bul </a>
         <a className="transition hover:text-white" href="/"> Mentorluk </a>
       </nav>
     </div>
 
     <div>
       <strong className="text-sm font-bold tracking-wide text-white uppercase">
         Hakkımızda
       </strong>
 
       <nav className="flex flex-col mt-6 space-y-1 text-gray-400">
         <a className="transition hover:text-white" href="/"> FeDevClub </a>
         <a className="transition hover:text-white" href="/"> Kariyer </a>
         <a className="transition hover:text-white" href="/"> Yönetim Kurulu </a>
         <a className="transition hover:text-white" href="/">
           Çerezler ve Gizlilik
         </a>
       </nav>
     </div>
 
     <div>
       <strong className="text-sm font-bold tracking-wide text-white uppercase">
         Destek
       </strong>
 
       <nav className="flex flex-col mt-6 space-y-1 text-gray-400">
         <a className="transition hover:text-white" href="/"> S.S.S. </a>
         <a className="transition hover:text-white" href="/"> İletişim </a>
         <a className="transition hover:text-white" href="/"> Geri Bildirim </a>
       </nav>
     </div>
   </div>
  )
}
