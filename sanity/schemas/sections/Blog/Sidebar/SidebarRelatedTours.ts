import { defineArrayMember, defineField, defineType } from 'sanity'
import {  displayNumber, joinStrings } from '@/lib/utils'
import { NavigationArrow } from '@phosphor-icons/react'

export default defineType({
  name: 'sidebar_related_tours',
  title: 'Sidebar Related Tours',
  icon: NavigationArrow as any,
  description: 'Sidebar Related Tours Section for the blog',
  type: 'object',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'The tagline for the sidebar related tours section',
      type: 'locale_string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The heading for the sidebar related tours section',
      type: 'locale_string',
    }),
    defineField({
      name: 'tours',
      title: 'Tours',
      description: 'The tours to display in the sidebar related tours section',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'tour',
          title: 'Tour',
          description: 'A tour',
          type: 'reference',
          to: [{ type: 'tour_page' }],
        }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      description: 'The tags to filter the tours by',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'tag',
          title: 'Tag',
          description: 'A tag',
          type: 'reference',
          to: [{ type: 'tag' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      tours_count: 'tours_count',
    },
    prepare: ({ title, tours_count }) => ({
      title: 'Sidebar Related Tours',
      subtitle: joinStrings('|', title.en, displayNumber(tours_count?.length, 'tour')),
    }),
  },
})
