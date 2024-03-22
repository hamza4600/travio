/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */
import { Article, Browsers, Files, Globe, MapTrifold, Newspaper, PenNib, Tag } from '@phosphor-icons/react'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
import { deskTool, type DeskToolOptions } from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schemaTypes} from './sanity/schema'


// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

const CustomDocumentTypes = new Set(['page', 'article', 'blog_page', 'tag'])
// main blogs Page

const Singletons = new Set(['tailor_your_tour', 'globals', 'newsletter_section'])

const deskToolOptions: DeskToolOptions = {
  name: 'Traviio',
  title: 'Traviio',
  structure: (S) =>
    S.list()
      .title('Traviio')
      .items([
        S.listItem()
          .title('General Pages')
          .icon(Browsers)
          .child(S.documentTypeList('page').title('General Pages')),
        S.listItem()
          .title('Blog')
          .icon(Article)
          .child(
            S.list()
              .title('Blog')
              .items([
                S.listItem()
                  .title('Articles')
                  .icon(PenNib)
                  .child(S.documentTypeList('article').title('Articles')),
                S.listItem()
                  .title('Blog Pages')
                  .icon(Files)
                  .child(S.documentTypeList('blog_page').title('Blog Pages')),
                S.listItem().title('Tags').icon(Tag).child(S.documentTypeList('tag').title('Tags')),
              ])
          ),
        ...S.documentTypeListItems().filter((item: any) => {
          return (
            !CustomDocumentTypes.has(
              typeof item.getSchemaType() === 'string'
                ? item.getSchemaType()
                : item.getSchemaType()?.name || ''
            ) &&
            !Singletons.has(
              typeof item.getSchemaType() === 'string'
                ? item.getSchemaType()
                : item.getSchemaType()?.name || ''
            )
          )
        }),
        S.divider(),
        S.listItem()
          .title('Global Components')
          .icon(Globe)
          .id('globals')
          .child(S.document().schemaType('globals').documentId('globals')),
        S.listItem()
          .title('Tailor Your Tour')
          .icon(MapTrifold)
          .id('tailor_your_tour')
          .child(S.document().schemaType('tailor_your_tour').documentId('tailor_your_tour')),
          // news Letter Section
        S.listItem()
          .title('Newsletter Section')
          .icon(Newspaper)
          .id('newsletter_section')
          .child(S.document().schemaType('newsletter_section').documentId('newsletter_section')),
      ]),
}
export default defineConfig({
  basePath: '/studio',
  name: 'travio',
  title: 'Travio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: schemaTypes,
  },
  plugins: [
    // structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    deskTool(deskToolOptions),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
