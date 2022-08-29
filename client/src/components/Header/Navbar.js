import React from 'react'

export default function Navbar() {
  return (
    <div>
          <nav className="hidden space-x-8 text-sm font-medium md:flex">
               <a className="text-white" href="#">Anasayfa</a>
               <a className="text-white" href="#">Blog</a>
               <a className="text-white" href="#">Destek Kanalı</a>
               <a className="text-white" href="#">Başvurular</a>
               <a className="text-white" href="#">İletişim</a>
               <a className="text-white" href="#">Hakkımızda</a>
          </nav>
    </div>
  )
}
