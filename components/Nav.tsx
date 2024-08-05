'use client';
import { useAuth } from "@/contexts/useAuth";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavMenu from "./NavMenu";


const Nav = () => {
  const { user, signOut, loading } = useAuth();

  const menu = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Brands', path: '/brands' },
  ];

  const preventMenu = ['/login', '/sign-up'];

  return (
    <header className={`flex flex-row items-center ${preventMenu.includes(usePathname()) ? 'justify-center' : 'justify-between'} w-full`}>
      <Link href="/" className="w-fit">
        <svg width="86" height="41" viewBox="0 0 86 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3249 8.27196L6.85251 38.2828C6.80409 38.4458 6.71923 38.5948 6.60477 38.7178C6.4903 38.8407 6.34945 38.9342 6.19355 38.9906C4.525 39.592 2.71035 39.6057 1.03347 39.0295L0.83713 38.9629C0.714039 38.9212 0.611946 38.831 0.553215 38.7118C0.494483 38.5927 0.483901 38.4544 0.523787 38.3272C1.74354 34.4052 10.1016 6.15965 11.4168 2.2709C12.2049 -0.0551398 18.66 -0.0551398 19.6014 2.16542C21.3376 6.25957 26.8635 31.1715 26.8635 31.1715C26.8635 31.1715 32.8008 6.18186 34.26 2.16542C35.0669 -0.0551398 41.6363 0.0919724 42.5199 2.18207C44.2116 6.19018 50.5323 31.1715 50.5323 31.1715C50.5323 31.1715 55.4301 6.15549 57.1219 2.16542C58.0633 -0.0551398 64.9219 -0.0551398 66.2667 2.16542C67.3937 4.02653 72.5403 12.6451 73.6121 15.1265C76.3865 14.0496 79.1851 12.9337 82.1598 12.6201C82.2943 12.6062 82.4153 12.5923 82.5417 12.5701C83.8086 12.3411 86.8774 12.7478 85.0969 14.1453C84.8984 14.2975 84.6852 14.4282 84.4608 14.5353C83.7319 14.8948 82.9465 15.0683 82.1571 15.2584C79.4271 15.9135 77.1813 16.7281 74.9691 18.1534C78.0783 26.6623 81.3933 39.4944 68.717 40.4215C62.282 41.1723 57.6114 36.4564 59.4377 29.7808C60.7745 25.1204 64.1607 21.4093 67.8792 18.574C66.3582 14.781 61.693 8.27196 61.693 8.27196L54.4578 38.4521C54.4091 38.644 54.3127 38.8195 54.1783 38.9614C54.0439 39.1032 53.8761 39.2066 53.6913 39.2612L53.499 39.3181C51.56 39.8899 49.5046 39.8899 47.5656 39.3181L47.3491 39.2543C47.1705 39.2018 47.0077 39.1038 46.8756 38.9691C46.7435 38.8345 46.6464 38.6677 46.5933 38.484L38.5163 8.27196L30.7984 38.4729C30.7466 38.6593 30.6497 38.8289 30.5167 38.9659C30.3838 39.1029 30.2192 39.2026 30.0386 39.2557L29.8301 39.3181C27.8912 39.8899 25.8358 39.8899 23.8968 39.3181L23.6964 39.2585C23.5138 39.2044 23.3477 39.1029 23.214 38.9636C23.0803 38.8244 22.9834 38.6521 22.9325 38.4632L15.3249 8.27196ZM69.0384 37.4307C72.4986 33.757 70.6401 27.341 69.4822 22.9637C66.1147 26.9066 63.5219 34.1734 69.0384 37.4265V37.4307Z" fill="#F4F4F5" />
        </svg>
      </Link>
      {!preventMenu.includes(usePathname()) && (
        <>
          <NavMenu menu={menu} />
          {user ? (
            <div className="flex flex-row gap-4">
              <button onClick={signOut} className="bg-zinc-800 text-zinc-50 rounded-full px-6 py-3 font-normal transition-colors hover:bg-zinc-900">Sign Out</button>
              <Link href="/profile">
                <div className="w-12 h-12 bg-zinc-900 rounded-full"></div>
              </Link>
            </div>
          ) : (
            <Link href="/login">
              <button className="bg-zinc-800 text-zinc-50 rounded-full px-6 py-3 font-normal transition-colors hover:bg-zinc-900">Sign In</button>
            </Link>
          )}
        </>
      )}

      {/* <div className="w-12 h-12 bg-zinc-900 rounded-full"></div> */}
    </header>
  );
};

export default Nav;
