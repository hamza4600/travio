import React, { ReactNode } from 'react'
import localFont from 'next/font/local'

import { SanityGlobals, SanityLocale, SanityPromoBanner } from '../../../sanity/lib/types'

import { urlFor } from '../../../sanity/lib/client'
import PromoBanner from '../molecules/Promobanner'
import Footer from '../molecules/footer'
import Header from '../molecules/Header'
import Schema from '../atom/Schema'
import Breadcrumbs, { Breadcrumb } from '../atom/Breadcrumbs'

const myFont = localFont({ src: '../../../public/Satoshi-Variable.ttf' })
const Layout = ({
  children,
  globals,
  breadcrumbs,
  promo_banner,
  locale,
  head,
}: {
  children: ReactNode
  globals?: SanityGlobals
  breadcrumbs: Breadcrumb[]
  promo_banner?: SanityPromoBanner
  locale: SanityLocale
  head?: any
}) => {
  return (
    <div className={myFont.className}>
      {globals?.navbar?.logo && (
        <Schema
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            url: process.env.NEXT_PUBLIC_BASE_URL,
            logo: urlFor(globals?.navbar?.logo),
          }}
        />
      )}
      <div
        className="overflow-x-hidden bg-white text-black min-h-screen  flex flex-col"
        // style={{ width: process.env.NEXT_PUBLIC_DEVELOPMENT ? 1440 : '' }}
        style={{ width: process.env.NEXT_PUBLIC_DEVELOPMENT ? '' : '' }}
      >
        <Header navbar={globals?.navbar} />

        <main className={'grow'}>
          <PromoBanner banner={promo_banner} locale={locale} />
          <Breadcrumbs paths={breadcrumbs} />

          {children}
        </main>
        <Footer footer={globals?.footer} />
      </div>
    </div>
  )
}

export default Layout
