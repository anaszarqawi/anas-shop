import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Nav from '@/components/Nav';
import 'material-symbols/rounded.css';
import { ReduxProvider } from '@/redux/provider';
import { AuthProvider } from '@/contexts/useAuth';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: "Anas Zarqawi",
//   description: "I build pixel-perfect, engaging, and accessible digital experiences.",

//   openGraph: {
//     description: "I build pixel-perfect, engaging, and accessible digital experiences.",
//     title: "Anas Zarqawi",
//     type: "website",
//     locale: "en_US",
//     url: "https://anaszarqawi.com",
//     siteName: "Anas Zarqawi",
//     images: [
//       {
//         url: "/images/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Anas Zarqawi",
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 leading-relaxed text-zinc-100 antialiased selection:bg-zinc-700 selection:text-zinc-300`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
