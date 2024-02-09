import { defineArrayMember, defineField, defineType } from 'sanity'
import { BookBookmark } from '@phosphor-icons/react'

export default defineType({
  name: 'index_section',
  title: 'Index Section',
  type: 'object',
  icon: BookBookmark as any,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The title of the section',
      type: 'locale_rich_text',
    }),
    defineField({
      name: 'tours',
      title: 'Tour Links',
      description: 'Tour Link',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'link',
          title: 'Link',
          type: 'link',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      links: 'tours',
    },
    prepare: ({ title }) => {
      return {
        title: `Index Section`,
      }
    },
  },
})
