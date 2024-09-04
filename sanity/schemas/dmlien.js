const dmlien = {
  name: 'dmlien',
  type: 'document',
  title: 'DMlien',
  fields: [
    {
      name: 'headshot',
      type: 'image',
      title: 'Headshot',
    },
    {
      name: 'fullName',
      type: 'string',
      title: 'Full Name',
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
