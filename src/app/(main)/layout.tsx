import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../globals.css';
import Image from 'next/image'

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
      <div className=' fixed  bg-cover bg-top h-screen w-screen bg-[url("/bg_sm.webp")] md:bg-[url("/bg_23.webp")]'/>
      <div className=' z-10 relative'>
      {children}
      </div>
        </body>
    </html>
  )
}
