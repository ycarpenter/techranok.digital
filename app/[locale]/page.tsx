import Header from './(components)/Header/Header'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Wrapper from './(components)/Wrapper/Wrapper'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Wrapper>
          <section></section>
        </Wrapper>
      </main>
    </>
  )
}
