'use client'

import React from 'react'
import { observer } from 'mobx-react-lite';
import Link from 'next/link';

type FooterCardProps<T> = {
  title: string;
  items: T[];
};

const FooterCard: React.FC<FooterCardProps<any>> = ({ title, items }) => {

  return (
    <div className='flex w-full justify-center'>
      <ul>
        <h1 className='text-center text-[20px]'>{title}</h1>
        {items.map((item: any, index: number) => (
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
  )
}

export default observer(FooterCard);
