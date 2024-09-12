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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Initiative Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Page slug',
      validation: (Rule) => Rule.required(),
      description: 'make sure there are no special characters',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'text',
      title: 'Short description for main page',
      validation: (Rule) => Rule.required().max(380),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      description: 'Description',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Description text', value: 'description' }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                  {
                    title: 'Open in new window',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
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
