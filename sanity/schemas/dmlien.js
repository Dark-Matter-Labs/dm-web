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
      name: 'alumni',
      type: 'boolean',
      title: 'Alumni',
      initialValue: false,
      description:
        'Turn on once this person has left Dm. They move to the Alumni section at the bottom of the Team page, and appear under “Past team” on any project or initiative they worked on. Their Dm email address is hidden.',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description:
        'Hidden on the site for alumni, so we never publish an address that no longer works.',
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
  orderings: [
    {
      title: 'Current team first, then A–Z',
      name: 'alumniThenName',
      by: [
        { field: 'alumni', direction: 'asc' },
        { field: 'fullName', direction: 'asc' },
      ],
    },
    {
      title: 'Name A–Z',
      name: 'fullNameAsc',
      by: [{ field: 'fullName', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'fullName',
      media: 'headshot',
      alumni: 'alumni',
      city: 'location.0.city',
    },
    prepare({ title, media, alumni, city }) {
      return {
        title,
        media,
        subtitle: [alumni ? 'Alumni' : 'Current team', city]
          .filter(Boolean)
          .join(' · '),
      };
    },
  },
};

export default dmlien;
