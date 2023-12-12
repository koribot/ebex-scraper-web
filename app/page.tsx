'use client'

import Image from 'next/image'
import HomePage from '../components/home/HomePage'
import { observer } from 'mobx-react-lite';
import Navbar from '@/components/navbar/Navbar';
import HomePageBody from '@/components/home/HomePageBody';
import Footer from '@/components/footer/Footer';


function Home() {
  return (
    <>
      <Navbar />
      <HomePageBody />
      <Footer />
    </>
  )
}


export default observer(Home)