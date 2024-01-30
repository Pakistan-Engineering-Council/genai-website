import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../globals.css'
import Image from 'next/image'
import Footer from '@/components/footer/page'
import TopHeader from '@/components/topHeader'
import NavBar from '@/components/navBar'
import Hamburger from '@/components/hamburger'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PEC-GenAI',
  description: 'Generative AI Course for Engineers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
      <div className=" top-0 md:mx-8">
      <div className="hidden md:flex md:flex-col">
      <TopHeader/>
      <NavBar />
      </div>
      <div className="md:hidden translate-y-2">
        <Hamburger/>
      </div>
      </div>
      {children}
      <Footer/>
        </body>
    </html>
  )
}
