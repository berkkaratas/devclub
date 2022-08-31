import React from 'react'
import {  Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
          <nav className="hidden space-x-8 text-sm font-medium md:flex">
            <Link className="text-white" to="/home">Anasayfa</Link>
            <Link className="text-white" to="/blog">Blog</Link>
            <Link className="text-white" to="/support">Destek Kanaları</Link>
            <Link className="text-white" to="/applications">Başvurular</Link>
            <Link className="text-white" to="/contact">İletişim</Link>
            <Link className="text-white" to="/about">Hakkımızda</Link>
          </nav>
    </div>
  )
}
