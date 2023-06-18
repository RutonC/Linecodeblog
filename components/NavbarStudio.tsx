import Link from 'next/link'
import React from 'react'
import {ArrowUturnLeftIcon} from '@heroicons/react/24/solid'

const NavbarStudio = (props: any) => {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
      
        <Link href='/' className="text-[#0C1B33] flex items-center">
          <ArrowUturnLeftIcon className='h-6 w-6 text-[#0C1B33] mr-2'/>
          Volte para o site</Link>
        
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default NavbarStudio