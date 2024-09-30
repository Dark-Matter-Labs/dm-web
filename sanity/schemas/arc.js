const arcObject = {
  name: 'arcObject',
  type: 'document',
  title: 'Arc',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name of the arc',
      validation: (Rule) => Rule.required(),
    },
    {
      title: '2 letter abbreviation',
      name: 'value',
      type: 'string',
      validation: (Rule) => Rule.required().max(2).min(2),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Arc Image',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    {
      title: 'Description',
      name: 'content',
      type: 'array',
      description: 'Description of the lab',
      of: [
        {
          type: 'block',
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
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{ type: 'linkObject' }],
    },
  ],
};

export default arcObject;
