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
    },
    {
      name: 'title',
      type: 'string',
      title: 'Feed Item Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Feed Item Subtitle',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Post date',
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
      name: 'description',
      type: 'text',
      title: 'Full description',
      hidden: ({ parent }) => parent?.type === 'media',
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
