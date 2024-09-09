const initiative = {
  name: 'initiative',
  type: 'document',
  title: 'Initiative',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Initiative Image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Initiative Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Page slug',
      description: 'make sure there are no special characters',
      options: {
        source: 'title',
        inUnique: 'true',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Initiative Subtitle',
    },
    {
      name: 'short_description',
      type: 'text',
      title: 'Short description for main page',
      validation: (Rule) => Rule.required().max(380),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Full description',
    },
    {
      name: 'website',
      type: 'url',
      title: 'Website link',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
    {
      name: 'publication',
      type: 'url',
      title: 'Blog/publication link',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
    {
      name: 'team',
      type: 'array',
      title: 'Initiative Team',
      of: [{ type: 'reference', to: { type: 'dmlien' } }],
    },
    {
      name: 'partners',
      type: 'array',
      title: 'Partners',
      of: [{ type: 'reference', to: { type: 'partnerObject' } }],
    },
  ],
};

export default initiative;
