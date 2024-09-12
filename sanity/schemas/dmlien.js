const dmlien = {
  name: 'dmlien',
  type: 'document',
  title: 'DMlien',
  fields: [
    {
      name: 'headshot',
      type: 'image',
      title: 'Headshot',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fullName',
      type: 'string',
      title: 'Full Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email',
            invert: false,
          },
        ),
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
    },
    {
      name: 'location',
      type: 'array',
      title: 'Location',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'locationObject' }],
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{ type: 'linkObject' }],
    },
  ],
};

export default dmlien;
