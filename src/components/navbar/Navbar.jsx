'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'Portfolio',
      url: '/portfolio'
    },
    {
      id: 3,
      title: 'Blog',
      url: '/blog'
    },
    {
      id: 4,
      title: 'About',
      url: '/about'
    },
    {
      id: 5,
      title: 'Contact',
      url: '/contact'
    },
    {
      id: 6,
      title: 'Dashboard',
      url: '/dashboard'
    }
  ]
  return (
    <div className='h-[100px] flex justify-between items-center'>
      <Link href='/' className='text-[22px] font-semibold'>NextJS</Link>
      <div className='flex items-center gap-5'>
        {links.map(link => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        <button onClick={() => { console.log("logout")}} className='p-[5px] bg-green-600 text-white pointer rounded-sm text-sm'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar