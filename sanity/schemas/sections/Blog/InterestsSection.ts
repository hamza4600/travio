import { defineArrayMember, defineField, defineType } from 'sanity'
import {  displayNumber, joinStrings } from '@/lib/utils'

import { Star } from '@phosphor-icons/react'

export default defineType({
  name: 'interests_section',
  title: 'Interests Section',
  icon: Star as any,
  description: 'A section with interests',
  type: 'object',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'The tagline for the interests section',
      type: 'locale_string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The heading for the interests section',
      type: 'locale_string',
    }),
    defineField({
      name: 'interests',
      title: 'Interests',
      description: 'The interests for the interests section',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'tag' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      interests: 'interests',
    },
    prepare: ({ title, interests }) => {
      return {
        title: 'Interests Section',
        subtitle: joinStrings('|', title, displayNumber(interests?.length, 'interest')),
      }
    },
  },
})
