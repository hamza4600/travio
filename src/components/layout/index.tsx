import { ReactNode } from "react";
import dynamic from "next/dynamic";

import {
  SanityGlobals,
  // SanityLocale,
  // SanityPromoBanner,
} from "../../../sanity/lib/types";

import { urlFor } from "../../../sanity/lib/client";
const PromoBanner = dynamic(() => import("../molecules/Promobanner"));
const Footer = dynamic(() => import("../molecules/footer"));
import Header from "../molecules/Header";
import Schema from "../atom/Schema";
import Breadcrumbs, { Breadcrumb } from "../atom/Breadcrumbs";

// const myFont = localFont({ src: '../../../public/Satoshi-Variable.ttf' })
const Layout = ({
  children,
  globals,
  breadcrumbs,
  promo_banner,
  locale,
  head,
}: {
  children: ReactNode;
  globals?: SanityGlobals;
  breadcrumbs: Breadcrumb[];
  promo_banner?: any;
  locale: any;
  head?: any;
}) => {
  return (
    <div className="bg-white">
      <div>
        {globals?.navbar?.logo && (
          <Schema
            data={{
              "@context": "https://schema.org",
              "@type": "Organization",
              url: process.env.NEXT_PUBLIC_BASE_URL,
              logo: urlFor(globals?.navbar?.logo),
            }}
          />
        )}
        <div
          className="overflow-x-hidden text-black min-h-screen  flex flex-col"
          // style={{ width: process.env.NEXT_PUBLIC_DEVELOPMENT ? 1440 : '' }}
          style={{
            width: process.env.NEXT_PUBLIC_DEVELOPMENT ? "" : "",
          }}
        >
          <Header
            navbar={globals?.navbar}
            banner={globals?.banner}
            locale={locale}
          />

          <main className="grow">
            <PromoBanner banner={promo_banner} locale={locale} />
            <Breadcrumbs paths={breadcrumbs} locale={locale} />

            {children}
          </main>
          <Footer footer={globals?.footer} language={locale} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
