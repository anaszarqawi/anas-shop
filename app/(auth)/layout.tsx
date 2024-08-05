"use client";
import Button from "@/components/Button";
import NavMenu from "@/components/NavMenu";
import { useAuth } from "@/contexts/useAuth";



const menu = [
  { name: 'Login', path: '/login' },
  { name: 'Sign Up', path: '/sign-up' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { signInWithGoogle, loading } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-44 w-1/4 mx-auto">
      <NavMenu menu={menu} />
      <Button label="Continue with Google" loading={loading} onClick={signInWithGoogle} />
      <div className="text-sm text-zinc-600">
        or
      </div>
      {children}
    </div>
  );
}