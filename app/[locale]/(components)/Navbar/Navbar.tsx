'use client'

import Link from 'next-intl/link'
import { useEffect, useState, useRef } from 'react'
import { INavLink, INavbarProps } from '@/utils/types'
import MenuButton from '../Buttons/MenuButton'
import ToggleLang from '../ToggleLang/ToggleLang'
import { disableScroll, enableScroll } from '@/utils/toggleScroll'
import styles from './navbar.module.css'

export default function Navbar({ tLinks }: INavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState<number | null>(null)

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isOpen) {
        disableScroll()
      } else {
        enableScroll()
      }
    }
  }, [isOpen])

  return (
    <nav className={`flex justify-between items-center`}>
      <div className='flex items-center'>
        <MenuButton
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />

        <ul
          className={`${
            isOpen
              ? 'absolute top-0 left-0 h-screen min-w-full flex flex-col justify-center items-center bg-default bg-gradient-to-b from-stone-300 via-neutral-500 to-zinc-400 backdrop-blur-3xl'
              : 'max-lg:hidden'
          } flex `}
        >
          {tLinks?.map(({ name, path }: INavLink, idx) => {
            return (
              <li
                key={name?.replaceAll(' ', '-')}
                className='p-1'
              >
                <Link
                  className={`block relative p-1 uppercase transition-transform transition-50 duration-500
                  ${styles.nav__link} 
                  ${activeLink === idx ? styles.activeLink : styles.inactiveLink}}
                  ${activeLink !== null && activeLink !== idx ? styles.blur : ''}`}
                  href={path}
                  passHref
                  rel='noopener noreferrer'
                  onMouseEnter={() => {
                    setActiveLink(idx)
                    console.log(tLinks)
                  }}
                  onMouseLeave={() => setActiveLink(null)}
                >
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>

        <ToggleLang />
      </div>

      <Link
        href='/'
        className='text-end'
      >
        <h2 className={`${isOpen ? 'relative z-10' : ''}`}>LOGO</h2>
      </Link>
    </nav>
  )
}
