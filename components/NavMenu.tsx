'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Icon from './Icon';

type MenuProps = {
  icon?: string;
  name: string;
  path: string;
};

const NavMenu = ({ menu, dir, setCurrentOpen }: { menu: MenuProps[]; dir?: 'row' | 'col'; setCurrentOpen?: (item: { item: MenuProps }) => void }) => {
  return (
    <ul
      className={
        'flex flex-row w-fit gap-2 h-fit bg-zinc-900 font-normal text-base text-zinc-50 rounded-2xl p-1 transition-all duration-300 ease-in-out' +
        (dir === 'col' ? ' flex-col' : ' flex-row')
      }>
      {menu.map((item, index) => (
        <Link href={item.path} key={index} className="w-full" onClick={() => setCurrentOpen && setCurrentOpen({ item })}>
          <li
            key={index}
            className={`flex items-center justify-center gap-4 px-8 h-11 ${
              dir === 'col' ? '!justify-start text-left !px-4 !pr-10' : 'w-40'
            } rounded-xl  whitespace-nowrap ${
              usePathname() === item.path ? '!bg-zinc-800 hover:!bg-zinc-700/50' : ''
            } transition-colors hover:bg-zinc-800`}>
            {item.icon && (
              <span className="text-zinc-400">
                <Icon name={item.icon} />
              </span>
            )}
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavMenu;
