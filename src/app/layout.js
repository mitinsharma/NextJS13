import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS',
  description: 'NextJS 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
