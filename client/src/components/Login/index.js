import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
      /*
     <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->
     */
  return (
    <div className="bg-gray-900 py-16">
    

<div className="px-4 py-16 my-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
  <div className="max-w-lg mx-auto">
    <h1 className="text-2xl font-bold text-center text-pink-400 sm:text-3xl">Şimdi harekete geç</h1>

    <p className="max-w-md mx-auto mt-4 text-center text-white">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat
      mollitia?
    </p>

    <form action="" className="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4">
      <p className="text-lg text-white font-medium">Hesabına giriş yap</p>

      <div>
        <label htmlFor="email" className="text-sm text-white font-medium">Email</label>

        <div className="relative mt-1">
          <input
            type="email"
            id="email"
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter email"
          />

          <span className="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="text-sm text-white font-medium">Şifre</label>

        <div className="relative mt-1">
          <input
            type="password"
            id="password"
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-pink-400 rounded-lg">
        Giriş yap
      </button>

      <p className="text-sm text-center text-white">
        Hesabın yok mu?
        <Link className="underline" to="/register">Kayıt ol!</Link>
      </p>
    </form>
  </div>
</div>

    </div>
  )
}
