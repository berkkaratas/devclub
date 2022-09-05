import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogSideMenu() {
  return (
    <div className='relative'>
     <div className="col-span-1 w-[240px] fixed flex   flex-col justify-between h-screen bg-gray-900 border-gray-700 border-r ">
  <div className="px-4 py-6">
   
                     <div className="flex lg:w-0 fixed top-4 left-16 lg:flex-1">
                         <Link to="/" className="w-20 h-10 font-medium text-white sm:text-3xl rounded-lg">FeDevClub</Link>
                    </div>
    <nav className="fixed top-24 left-6 max-w-[280px] text-white flex-col    space-y-1">
      <a
        href="/blog#"
        className="flex items-center px-4 py-2 text-white bg-pink-500 rounded-lg"
      >
        <svg class="w-5 h-5 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>

        <span className="ml-3 text-sm font-medium"> Takip Ettiklerim </span>
      </a>
      <hr className='border-b border-gray-700 '></hr>

      
      <a
        href="/blog#"
        className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700"
      >
        <svg class="w-5 h-5 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>

        <span className="ml-3 text-sm font-medium"> Popüler ve Yeni </span>
      </a>

      <a
        href="/blog#"
        className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75"><path d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z" fill="currentcolor" fill-rule="evenodd"></path></svg>

        <span className="ml-3 text-sm font-medium"> En Çok Oylanan </span>
      </a>
      <a
        href="/blog#"
        className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700"
      >
       <svg class="w-5 h-5 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

        <span className="ml-3 text-sm font-medium"> Ara </span>
      </a>
      <hr className='border-b border-gray-700 '></hr>
      <a
        href="/blog#"
        className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700"
      >
        <svg class="w-5 h-5 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>

        <span className="ml-3 text-sm font-medium"> Gönderi Oluştur </span>
      </a>
      <hr className='border-b border-gray-700'></hr>
      <a
        href="/blog#"
        className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700"
      >
        <svg class="w-5 h-5 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>

        <span className="ml-3 text-sm font-medium"> Kaydettiklerin </span>
      </a>
      <a
        href="/blog#"
        className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700"
      >
        <svg class="w-5 h-5 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>

        <span className="ml-3 text-sm font-medium"> Okuma Geçmişin </span>
      </a>
      <hr className='border-b border-gray-700'></hr>

      <a
        href="/blog#"
        className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <span className="ml-3 text-sm font-medium"> Özelleştir</span>
      </a>

     
    </nav>
  </div>

  <div className="fixed max-w-[240px] inset-x-0 bottom-0 border-t border-gray-700 fixed left-0 bottom-0 border-gray-700 border-r">
  <details className="group text-white">
        <summary
          className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>

          <span className="ml-3 text-sm font-medium"> Hesabım </span>

          <span
            className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <nav className="mt-1.5 ml-8 flex flex-col">
          <a
            href="/blog#"
            className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>

            <span className="ml-3 text-sm font-medium"> Detaylar </span>
          </a>

          <a
            href="/blog#"
            className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>

            <span className="ml-3 text-sm font-medium"> Güvenlik </span>
          </a>

          <form action="/logout">
            <button
              type="submit"
              className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span className="ml-3 text-sm font-medium"> Oturumu kapat </span>
            </button>
          </form>
        </nav>
      </details>
    <a href="/blog#" className="flex items-center text-white p-4 bg-gray-900 hover:bg-gray-700 shrink-0">
      <img
        className="object-cover w-10 h-10 rounded-full"
        src="https://www.hyperui.dev/photos/man-4.jpeg"
        alt="Simon Lewis"
      />

      <div className="ml-4">
        <p className="text-xs">
          <strong className="block font-medium">@berk</strong>
        </p>
      </div>
    </a>
  </div>
</div>

    </div>
  )
}
