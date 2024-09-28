const linkObject = {
  name: 'linkObject',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
    },
    {
      title: 'Link URL',
      name: 'linkUrl',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
  ],
};

export default linkObject;
