const link = {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
  ],
};
