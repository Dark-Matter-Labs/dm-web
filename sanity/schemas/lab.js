const labObject = {
  name: 'labObject',
  type: 'document',
  title: 'Lab',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name of the lab',
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
      title: 'Lab Image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
  ],
};

// TODO: add description as portable text, link, publication, team

export default labObject;
