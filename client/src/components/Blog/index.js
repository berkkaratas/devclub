import React from 'react'
import Header from '../Home/Header'
import BlogHeadher from './BlogHeadher'
import BlogList from './BlogList'
import BlogSideMenu from './BlogSideMenu'

export default function Blog() {
  return (
    <div className='bg-gray-900'>
      <BlogHeadher />
      <div className='grid grid-flow-row-dense grid-cols-6'>
        <BlogSideMenu />
        <BlogList></BlogList>
      </div>
    </div>
  )
}
