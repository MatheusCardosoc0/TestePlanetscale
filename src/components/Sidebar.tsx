import React from 'react'
import SidebarRow from './SidebarRow'
import { VscTwitter } from 'react-icons/vsc'
import { HiAnnotation, HiBell, HiClipboard, HiDotsHorizontal, HiHashtag, HiHome, HiLibrary, HiOutlineAnnotation, HiOutlineChat, HiOutlineClipboardList, HiOutlineDocument, HiOutlineDocumentRemove, HiUser} from 'react-icons/hi'
import { signIn, signOut, useSession } from 'next-auth/react'

const Sidebar = () => {

  const {data: session} = useSession()

  return (
    <div className='p-2 pl-0 bg-gradient-to-tr from-gray-900 to-blue-800/40 flex flex-col gap-2 col-span-2 rounded-r-2xl mr-2 h-2/3'>
      <span className='mx-auto bg-black rounded-full border-4 p-1 border-blue-700 mb-8'>
        <VscTwitter className='text-blue-500 text-[4rem]' />
      </span>
      <div className='flex flex-col gap-6 mx-auto'>
        <SidebarRow Icon={<HiHome />} title='Pagina inicial' />
        <SidebarRow Icon={<HiHashtag />} title='Explorar' />
        <SidebarRow Icon={<HiBell />} title='Notificações' />
        <SidebarRow Icon={<HiAnnotation />} title='Mensagens' />
        <SidebarRow Icon={<HiClipboard />} title='Items salvos' />
        <SidebarRow Icon={<HiLibrary />} title='Listas' />
        <SidebarRow onClick={session? signOut : signIn} Icon={<HiUser />} title={session? 'Sair': 'Fazer login'} />
        <SidebarRow Icon={<HiDotsHorizontal />} title='Mais' />
      </div>
    </div>
  )
}

export default Sidebar