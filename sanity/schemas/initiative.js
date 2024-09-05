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
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Initiative Subtitle',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Initiative description',
      validation: (Rule) => Rule.required().max(380)
    },
    {
      name: 'initiativeTeam',
      type: 'array',
      title: 'Initiative Team',
      of: [{ type: 'reference', to: { type: 'dmlien' } }],
    },
  ],
};

export default initiative;
