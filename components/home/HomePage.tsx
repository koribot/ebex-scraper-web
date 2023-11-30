'use client'

import React from 'react'
import Navbar from '../navbar/Navbar'
import HomePageBody from './HomePageBody';
import Footer from '../footer/Footer';
import { observer } from 'mobx-react-lite';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomePageBody />
      <Footer />
    </>
  )
}

export default observer(HomePage)