import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'other_tours_section',
  title: 'Other Tours Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'locale_string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'locale_string',
    }),
    defineField({
      name: 'tour_cards',
      title: 'Tour Cards',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'tour_card',
          title: 'Tour Card',
          type: 'object',
          fields: [
            defineField({
              name: 'badge_content',
              title: 'Badge Content',
              type: 'locale_string',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'reference',
              to: [{ type: 'tour_page' }],
            }),
          ],
        }),
      ],
    }),
  ],
})
