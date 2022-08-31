import React from 'react'

export default function BlogItem() {
  return (
    <div>
        <a
  className="block overflow-hidden border border-gray-700 rounded-lg shadow-sm"
  href="/#"
>
  <img
    className="object-cover w-full h-56"
    src="https://www.hyperui.dev/photos/team-1.jpeg"
    alt=""
  />

  <div className="p-6 text-white">
    <h5 className="text-xl font-bold">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </h5>

    <p className="mt-2 text-sm text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <div
      className="inline-block pb-1 mt-4 font-medium text-pink-500 border-b border-pink-400 "
    >
      Find out more
      <span aria-hidden="true">&rarr;</span>
    </div>
  </div>
</a>

    </div>
  )
}
