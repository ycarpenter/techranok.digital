import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import IconBurger from '../Navbar/IconMenu'

interface IMenuButton {
  toggleMenu: () => void
  isOpen: boolean
}

export default function MenuButton({ toggleMenu, isOpen }: IMenuButton) {
  return (
    <button
      onClick={toggleMenu}
      title='Menu'
      className={`relative p-3 ${
        isOpen ? 'z-10' : ''
      } p-2 flex items-center justify-center w-[50px] h-[50px] rounded-full transform transition-all duration-300`}
    >
      <IconBurger isOpen={isOpen} />
    </button>

    // <button
    //   onClick={toggleMenu}
    //   title='Menu'
    //   className={`${
    //     isOpen ? 'z-10 bg-gradient-to-r from-sky-400 to-yellow-400' : ''
    //   } p-2 flex items-center justify-center w-[50px] h-[50px] rounded-full transform transition-all duration-300`}
    // >
    //   <IconBurger isOpen={isOpen} />
    // </button>
  )
}
