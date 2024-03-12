import { defineArrayMember, defineField, defineType } from 'sanity'
import {  displayNumber, joinStrings } from '@/lib/utils'
import { Article, RoadHorizon } from '@phosphor-icons/react'

export default defineType({
  name: 'travel_guide',
  title: 'Travel Guides',
  icon: RoadHorizon as any,
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      description: "The slug for this travel guide (relative to '/guide')",
      type: 'slug',
    }),
    // page meta data
    defineField({
      name: 'meta_data',
      title: 'Meta Data',
      description: 'Meta Data for SEO',
      type: 'meta_data',
    }),
    defineField({
      name: 'image_hero',
      title: 'Hero Image Banner',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'photo',
        }),
      ],
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'locale_string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'locale_string',
    }),
    defineField({
      name: 'tab_title',
      title: 'Tab Title',
      type: 'locale_string',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'section',
          title: 'Section',
          icon: Article as any,
          type: 'object',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            defineField({
              name: 'tree_title',
              title: 'Tree Title',
              description: 'The title to display in the tree',
              type: 'locale_string',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'locale_string',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'locale_rich_text',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare: ({ title }) => ({
              title: joinStrings('|', 'Section', title ?? 'Untitled'),
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      location: 'location',
      sections: 'sections',
      slug: 'slug',
    },
    prepare: ({ title, location, sections, slug }) => {
      return {
        title: joinStrings('|', 'Travel Guide', location),
        subtitle: joinStrings('|', title, slug?.current, displayNumber(sections.length, 'section')),
      }
    },
  },
})
