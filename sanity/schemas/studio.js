const studioObject = {
  name: 'studioObject',
  type: 'document',
  title: 'Studio',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name of the studio',
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
      title: 'Studio Image',
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

export default studioObject;
