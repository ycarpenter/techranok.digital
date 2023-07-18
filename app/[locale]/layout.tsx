import { useLocale } from 'next-intl'
import { getTranslator } from 'next-intl/server'
import { notFound } from 'next/navigation'
import './globals.css'
import { Fira_Sans_Condensed } from 'next/font/google'

type RootLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

const FiraSansCondensed = Fira_Sans_Condensed({ weight: ['400', '700'], subsets: ['latin'] })

export async function generateMetadata({ params: { locale } }: RootLayoutProps) {
  // While the `locale` is required, the namespace is optional and
  // identical to the parameter that `useTranslations` accepts.
  const t = await getTranslator(locale, 'Home.Metadata')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const locale = useLocale()

  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body
        className={`${FiraSansCondensed.className} w-screen h-screen bg-gradient-to-b from-stone-300 via-neutral-500 to-zinc-400 backdrop-blur-3xl text-default`}
      >
        {children}
      </body>
    </html>
  )
}
