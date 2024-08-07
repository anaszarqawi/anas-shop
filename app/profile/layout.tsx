'use client';
import Button from '@/components/Button';
import NavMenu from '@/components/NavMenu';
import { useState } from 'react';

const menu = [
  { name: 'Orders', icon: 'orders', path: '/profile/orders' },
  { name: 'Wishlist', icon: 'favorite', path: '/profile/wishlist' },
  { name: 'Addresses', icon: 'home', path: '/profile/addresses' },
  { name: 'Payment methods', icon: 'payments', path: '/profile/payment-methods' },
  { name: 'Profile', icon: 'person', path: '/profile' },
  { name: 'Security settings', icon: 'lock', path: '/profile/security' },
  { name: 'Sign out', icon: 'logout', path: '/sign-out' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentOpen, setCurrentOpen] = useState<{ name: string; path: string } | null>(menu[4]);
  return (
    <div className="flex flex-row gap-4 mt-44 w-full mx-auto">
      <NavMenu menu={menu} dir="col" setCurrentOpen={({ item }) => setCurrentOpen(item)} />
      <div className="flex flex-col gap-4 w-full p-8 bg-zinc-900 rounded-2xl">
        <h2 className="text-2xl text-zinc-500 font-semibold mb-4">{currentOpen?.name}</h2>
        {children}
      </div>
    </div>
  );
}
