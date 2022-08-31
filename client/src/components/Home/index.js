import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import WorkInProgress from '../WorkInProgress';

export default function Home() {
  return (
    <div>
      <WorkInProgress></WorkInProgress>
     <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
}
