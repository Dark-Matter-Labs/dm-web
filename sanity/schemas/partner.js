const partnerObj = {
  name: 'partnerObject',
  type: 'document',
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
    {
      name: 'image',
      type: 'image',
      title: 'Partner Logo',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    {
      title: 'Show on partners gallery?',
      name: 'showGallery',
      type: 'boolean',
      initialValue: false,
    },
  ],
};

export default partnerObj;
