import React from 'react';
import Image from 'next/image';

const Footer = () => {

  return (
    <div className='h-12 flex items-center justify-between text-sm'>
        <div>© NextJS. All rights reserved.</div>
        <div className='flex h-4 gap-2 items-center'>
          <Image src='/1.png' alt='' width='15' height='15' className='icon'/>
          <Image src='/2.png' alt='' width='15' height='15' className='icon'/>
          <Image src='/3.png' alt='' width='15' height='15' className='icon'/>
          <Image src='/4.png' alt='' width='15' height='15' className='icon'/>
        </div>
    </div>
  )
}

export default Footer