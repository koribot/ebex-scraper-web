'use client'
import React from 'react'
import { observer } from 'mobx-react-lite';
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import { FaYoutube } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaCircleQuestion } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import FooterCard from './FooterCard';


type TDevLists = {
  name: string,
  icon: any,
  href: string
}

type TTutorialsLists = {
  name: string,
  icon: any,
  href: string
}

type TAboutEbexLists = {
  name: string,
  icon: any,
  href: string
}

const devLists: TDevLists[] = [
  { name: 'Api', icon: IoIosSettings, href: '/' },
]

const tutorialsLists: TTutorialsLists[] = [
  { name: 'How does it work', icon: FaCircleQuestion, href: '/' },
  { name: 'How does it work', icon: FaCircleQuestion, href: '/' },
  { name: 'How does it work', icon: FaCircleQuestion, href: '/' },
  { name: 'How does it work', icon: FaCircleQuestion, href: '/' },
  { name: 'How does it work', icon: FaCircleQuestion, href: '/' },
  { name: 'How does it work', icon: FaCircleQuestion, href: '/' },
  { name: 'How does it work', icon: FaCircleQuestion, href: '/' },
]

const aboutEbexLists: TAboutEbexLists[] = [
  { name: 'Location', icon: FaLocationDot, href: '/' },
  { name: 'Meet the team', icon: FaPeopleGroup, href: '/' },
  { name: 'Misson ', icon: FaBookReader, href: '/' },
]


const Footer: React.FC = () => {
  return (
    <footer className='bg-[#f0efef4d] border-t-[2px] border-dashed flex flex-col'>
      <div className='flex px-[50px] py-[10px] justify-center gap-5 border-b-2 border-dashed'>
        <Link href='/'>
          <FaFacebook className='text-[30px] ' />
        </Link>
        <Link href='/'>
          <FaYoutube className='text-[30px] ' />
        </Link>
      </div>
      <div className='flex flex-row py-[20px] px-[30px] justify-around'>
        {/* <div className='flex w-full justify-center'>
          <ul>
            <h1 className='text-center text-[20px]'>Developer Options</h1>
            {devLists.map((item: TDevLists, index: number) => (
              <Link key={index} href={item.href}>
                <li className='flex flex-row items-center cursor-pointer gap-2'
                  style={{ '--border-bottom-animation-color': 'black' } as any}
                >
                  <item.icon />
                  <span className='border_bottom_animate relative '>{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div> */}
        <FooterCard title={'Developer Option'} items={devLists} />
        <FooterCard title={'Tutorials'} items={tutorialsLists} />
        <FooterCard title={'Developer Option'} items={aboutEbexLists} />
        {/* <div className='flex justify-center w-full'>
          <ul>
            <h1 className='text-center text-[20px]'>Tutorials</h1>
            {tutorialsLists.map((item: TTutorialsLists, index: number) => (
              <Link key={index} href={item.href}>
                <li className='flex flex-row items-center cursor-pointer gap-2'
                  style={{ '--border-bottom-animation-color': 'black' } as any}
                >
                  <item.icon />
                  <span className='border_bottom_animate relative '>{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className='flex justify-center w-full'>
          <ul>
            <h1 className='text-center text-[20px]'>About eBex</h1>
            {aboutEbexLists.map((item: TAboutEbexLists, index: number) => (
              <Link key={index} href={item.href}>
                <li className='flex flex-row items-center cursor-pointer gap-2'
                  style={{ '--border-bottom-animation-color': 'black' } as any}
                >
                  <item.icon />
                  <span className='border_bottom_animate relative '>{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div> */}
      </div>
    </footer>
  )
}

export default observer(Footer)