const feedItem = {
  name: 'feedItem',
  type: 'document',
  title: 'Feed Item',
  fields: [
    {
      title: 'Item Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Project', value: 'project' },
          { title: 'Update', value: 'update' },
          { title: 'Media', value: 'media' },
        ],
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Feed Item Image',
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
      title: 'Feed Item Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Feed Item Subtitle',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      title: 'Post date',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Labs',
      name: 'labs',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'labObject' } }],
    },
    {
      title: 'Arcs',
      name: 'arcs',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'arcObject' } }],
    },
    {
      title: 'Studios',
      name: 'studios',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'studioObject' } }],
    },
    {
      name: 'slug',
      type: 'slug',
      validation: (Rule) =>
        Rule.custom((slug, context) =>
          context.document.type !== 'media' && slug === undefined
            ? 'Slug required for projects and updates'
            : true,
        ),
      title: 'Page slug',
      hidden: ({ parent }) => parent?.type === 'media',
      description: 'make sure there are no special characters',
      options: {
        source: 'title',
        inUnique: 'true',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      description: 'Description',
      hidden: ({ parent }) => parent?.type === 'media',
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
      hidden: ({ parent }) => parent?.type === 'media',
    },
    {
      name: 'publication',
      type: 'url',
      title: 'Blog/publication link',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
      hidden: ({ parent }) => parent?.type === 'media',
    },
    {
      name: 'team',
      type: 'array',
      title: 'Feed Item Team',
      of: [{ type: 'reference', to: { type: 'dmlien' } }],
      hidden: ({ parent }) => parent?.type === 'media',
    },
    {
      name: 'partners',
      type: 'array',
      title: 'Partners',
      of: [{ type: 'reference', to: { type: 'partnerObject' } }],
      hidden: ({ parent }) => parent?.type === 'media',
    },
    {
      name: 'link',
      type: 'url',
      title: 'External link',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
      hidden: ({ parent }) => parent?.type !== 'media',
    },
  ],
};

export default feedItem;
