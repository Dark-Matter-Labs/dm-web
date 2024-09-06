const partnerObj = {
  name: 'partnerObject',
  type: 'object',
  title: 'Partner',
  fields: [
    {
      name: 'Name',
      type: 'string',
      title: 'Name of the org',
    },
    {
      title: 'Link/website',
      name: 'link',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
  ],
};

export default partnerObj;
