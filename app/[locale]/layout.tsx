import { useLocale } from 'next-intl'
import { getTranslator } from 'next-intl/server'
import { notFound } from 'next/navigation'
import './globals.css'
import { Inter } from 'next/font/google'

type RootLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
