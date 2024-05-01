import { defineField, defineType } from 'sanity'

import { Tag } from '@phosphor-icons/react'

export default defineType({
  name: 'touretag',
  title: 'Toure Tags',
  icon: Tag as any,
  description: 'A tag',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'locale_string',
    }),
     defineField({
      name: 'slug',
      title: 'Slug',
      description : 'The slug is the URL path segment for this tag. It should be unique eg :(outdoor, turkey).',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare: ({ title }) => ({
      title: 'Tag',
      subtitle:  title.en,
    }),
  },
})
