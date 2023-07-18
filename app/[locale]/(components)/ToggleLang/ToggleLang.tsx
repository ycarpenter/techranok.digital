'use client'

import Link from 'next-intl/link';

const toggleLang = (e: { preventDefault: () => void; }) => {
  e.preventDefault()
}
export default function ToggleLang() {
  return (
    <div>
      <button className={'pr-2'}
        onClick={() => toggleLang}>
        <Link
          locale="en"
          href="/"
          passHref
          rel="noopener noreferrer"
        >EN</Link>
      </button>

      <button
        onClick={() => toggleLang}>
        <Link
          locale="uk"
          href="/"
          passHref
          rel="noopener noreferrer"
        >UK</Link>
      </button>
    </div>
  )
}