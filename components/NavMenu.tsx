"use client";
import Link from "next/link";
import React from 'react';
import { usePathname } from "next/navigation";

type MenuProps = {
  name: string;
  path: string;
}

const NavMenu = ({ menu }: { menu: MenuProps[] }) => {
  return (
    <ul className="flex flex-row w-fit gap-0 bg-zinc-800 font-normal text-base text-zinc-50 rounded-full p-1 transition-all duration-300 ease-in-out hover:gap-1">
      {menu.map((item, index) => (
        <Link href={item.path} key={index}>
          <li key={index} className={`px-6 py-3 rounded-full ${usePathname() === item.path ? '!bg-zinc-200 !text-zinc-900 hover:!bg-zinc-300 font-medium' : ''} transition-colors hover:bg-zinc-900`}>
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavMenu;