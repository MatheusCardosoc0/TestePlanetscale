import React, { ReactNode, SVGProps } from 'react'
import { IconBaseProps, IconType } from 'react-icons'


interface SidebarRowProps {
  Icon: ReactNode
  title: string
  onClick?: () => {}
}

const SidebarRow = ({ title,onClick, Icon}: SidebarRowProps) => {
  return (
    <button onClick={() => onClick?.()} className='text-2xl font-bold bg-blue-500 bg-clip-text hover:border-b-8 pb-2 border-blue-600 cursor-pointer flex items-center gap-1 text-gray-200'>
       <b className='text-3xl lg:text-xl'>{Icon}</b>
      <span className='hidden lg:block text-2xl'>{title}</span>
     
    </button>
  )
}

export default SidebarRow