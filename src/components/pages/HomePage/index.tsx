"use client"

import Layout from "@/components/layout"
// import dynamic from "next/dynamic";
import Slicer from "../../../../sanity/slicer"

// const Popup = dynamic(() => import("@/components/molecules/Popup"));

import "react-photo-view/dist/react-photo-view.css"
import { SectionMap } from "@/components/sections"

const HomePage = ({ pageData, locale }) => {
  const { layout } = pageData || {}

  return (
    <Layout
      breadcrumbs={[]}
      locale={locale}
      globals={layout}
      promo_banner={layout?.banner}
      maxWidth={false}
    >
      {/* <Popup /> */}
      <Slicer
        locale={locale}
        components={SectionMap}
        sections={pageData?.pageData?.sections}
      />
    </Layout>
  )
}

export default HomePage
