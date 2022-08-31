import React from 'react'

export default function PendingFeatures() {
  return (
    <div className='bg-gray-900 p-64  '>
          <a 
            rel="noreferrer" 
            target="_blank" 
            href="https://www.instagram.com/fedevclub" 
            className="relative block group col-span-1 h-96"
            >
  <span className="absolute inset-0 border-2 border-pink-500 border "></span>

  <div
    className="relative flex items-end h-full bg-white border-2 border-black transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 className="mt-4 text-2xl font-medium">Bu servis henüz etkinleştirilmemiştir.</h2>
    </div>

    <div className="absolute p-8 opacity-0 transition-opacity group-hover:opacity-100 group-hover:relative">
      <h2 className="mt-4 text-2xl font-medium">Bu servis henüz etkinleştirilmemiştir.</h2>

      <p className="mt-4">
        Gelişmelerden haberdar olmak veya bize ulaşmak için sosyal medya hesaplarımızı takip edin!
      </p>

      <p className="mt-8 font-bold">Daha Fazla</p>
    </div>
  </div>
</a>

    </div>
  )
}
