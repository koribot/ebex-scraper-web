'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite'

type NavBarItem = {
  title: string;
  isOpen?: boolean,
  href: string;
  subMenu?: NavBarItem[];
};

const navBarLists: NavBarItem[] = [
  {
    title: 'Account',
    href: '#',
    isOpen: false,
    subMenu: [
      { title: 'Sign-in', href: '/signin' },
      { title: 'Create Account', href: '/signup' },
    ],
  },
  {
    title: 'Services',
    href: '#',
    isOpen: false,
    subMenu: [
      { title: 'Research', href: '/services/research' },
      { title: 'Listing', href: '/services/listing' },
    ],
  },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [navBarItems, setNavBarItems] = useState<NavBarItem[]>(navBarLists)

  const openItems = (itemTitle: string) => {
    setNavBarItems((prevNavBarLists) =>
      prevNavBarLists.map((item: NavBarItem) =>
        item.title === itemTitle ? { ...item, isOpen: true } : item
      )
    );
  };


  const closeItems = (itemTitle: string) => {
    setNavBarItems((prevNavBarLists) =>
      prevNavBarLists.map((item: NavBarItem) =>
        item.title === itemTitle ? { ...item, isOpen: false } : item
      )
    );
  };


  return (
    <nav className="bg-[#36b987] p-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <p className="text-white text-lg font-bold">eBex</p>
        </Link>

        {/* Desktop Display */}
        <div className="hidden lg:flex space-x-4">
          {navBarItems.map((item: NavBarItem) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={item.subMenu && (() => openItems(item.title))}
              onMouseLeave={item.subMenu && (() => closeItems(item.title))}
            >
              {item.subMenu ? (
                <>
                  <a className="text-white cursor-pointer">{item.title}</a>
                  {item.isOpen && (
                    <div className="absolute w-[max-content] left-1/2 -translate-x-1/2 top-full bg-white p-2 rounded shadow-lg">
                      {item.subMenu.map((subItem: NavBarItem) => (
                        <Link key={subItem.title} href={subItem.href}>
                          <p
                            className="text-gray-800 p-2 hover:bg-[#d8d5d5] hover:rounded-sm cursor-pointer"
                            onClick={() => closeItems(item.title)}
                          >
                            {subItem.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href}>
                  <p className="border_bottom_animate text-white relative cursor-pointer group">
                    {item.title}
                  </p>

                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default observer(Navbar);
