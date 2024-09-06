const arcObject = {
  name: 'arcObject',
  type: 'document',
  title: 'Arc',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name of the arc',
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

export default arcObject;
