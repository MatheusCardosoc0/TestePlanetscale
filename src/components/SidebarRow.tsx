import React from 'react'


interface SidebarRowProps {
  
  title: string
}

const SidebarRow = ({ title}: SidebarRowProps) => {
  return (
    <div className='text-sm'>
      <span>{title}</span>
    </div>
  )
}

export default SidebarRow