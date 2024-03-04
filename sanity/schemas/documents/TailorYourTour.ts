import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'tailor_your_tour',
  title: 'Tailor Your Tour Steps',
  type: 'document', 
  fields: [
    defineField({
      name: 'meta_data',
      title: 'Meta Data',
      description: 'Meta Data for SEO',
      type: 'meta_data',
    }),
    defineField({
      name: 'place_cards',
      title: 'Place Cards',
      description: 'Cards for the Destinations Section',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'place_card',
          title: 'Place Card',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'locale_string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'photo',
            }),
            defineField({
              name: 'is_primary_label',
              title: 'Primary Label?',
              description: 'Should the label be colored?',
              type: 'boolean',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'faq_section',
      title: 'FAQ Section',
      type: 'faq_section',
      options: {
        collapsible: true,
        collapsed: true,
      },  
    })
  ],
})
