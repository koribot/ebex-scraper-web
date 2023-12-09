'use client'

import Image from 'next/image'
import HomePage from '../components/home/HomePage'
import { observer } from 'mobx-react-lite';


function Home() {
  return (
    <>
      <HomePage />
    </>
  )
}


export default observer(Home)