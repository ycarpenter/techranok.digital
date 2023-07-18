import React from 'react'
import dynamic from 'next/dynamic'
import Button from '../Buttons/Button'
import { useTranslations } from 'next-intl'
import Wrapper from '../Wrapper/Wrapper'

const Navbar = dynamic(() => import('../Navbar/Navbar'))

export default function Header() {
  const t = useTranslations('Home')

  const translatedLinks = [
    {
      name: t('navLinks.home'),
      path: '/',
    },
    {
      name: t('navLinks.services'),
      path: '/our-services',
    },
    {
      name: t('navLinks.about'),
      path: '/about',
    },
    {
      name: t('navLinks.portfolio'),
      path: '/portfolio',
    },
    {
      name: t('navLinks.brief'),
      path: '/brief',
    },
    {
      name: t('navLinks.contact'),
      path: '/contacts',
    },
  ]

  return (
    <header className={``}>
      <Wrapper>
        <Navbar tLinks={translatedLinks} />
        <Button
          content={t('boost')}
          classes={'grow'}
        ></Button>{' '}
      </Wrapper>
    </header>
  )
}

// flex flex-wrap gap-2 justify-between items-center min-w-full
