import Navbar from './components/Navbar';
import Providers from './components/Providers';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: 'Blog',
  description: 'Sam Blog Posts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${inter.className} bg-white text-black dark:bg-zinc-900 dark:selection:bg-zinc-900 dark:text-white h-full selection:bg-zinc-50`}> 
      <Providers>
      <Navbar />
      <main className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
      {children}
      </main >
      </Providers>
      </body>
    </html>
  )
}
