import React, { ComponentClass, FunctionComponent } from 'react'

// import { SanityGlobals, SanityPromoBanner } from './lib/types'

// import { Breadcrumb } from '@/components/atom/Breadcrumbs'

export default function Slicer({
  sections,
  components,
  locale,

  // globals,
  // breadcrumbs,
  // promo_banner,
}: {
  sections?: ({ _type: string; _key: string } & { [x in string]: any })[]
  components: { [name in string]: FunctionComponent<any> | ComponentClass<any, any> }
  locale: string
  
  // globals?: SanityGlobals
  // breadcrumbs: Breadcrumb[]
  // promo_banner?: SanityPromoBanner
}) {

  return (
    <>
      {sections?.map((section) => (
        <React.Fragment key={section._key}>
          {components[section._type] &&
            React.createElement(components[section?._type], {
              data: section,
              locale,
              key: section._key,
            })}
        </React.Fragment>
      ))}
    </>
  )
}
