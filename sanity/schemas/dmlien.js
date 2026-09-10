/**
 * Only required for people still at Dm. We do not hold headshots, bios or
 * current locations for everyone who has moved on, so once `alumni` is on
 * the rest of the form is hidden and a name is all that is needed.
 */
const currentTeamOnly = (label) => ({
  hidden: ({ document }) => Boolean(document?.alumni),
  validation: (Rule) =>
    Rule.custom((value, context) =>
      context.document?.alumni || value ? true : `${label} is required`,
    ),
});

const dmlien = {
  name: 'dmlien',
  type: 'document',
  title: 'DMlien',
  fields: [
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
        'Turn on once this person has left Dm. Only their name is needed — the remaining fields hide, and the site lists them by name alone under Alumni on the Team page and Past team on any project they worked on.',
    },
    {
      name: 'headshot',
      type: 'image',
      title: 'Headshot',
      ...currentTeamOnly('Headshot'),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      hidden: ({ document }) => Boolean(document?.alumni),
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.alumni) return true;
          if (!value) return 'Email is required';
          return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
            value,
          )
            ? true
            : 'Not a valid email address';
        }),
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
      hidden: ({ document }) => Boolean(document?.alumni),
    },
    {
      name: 'location',
      type: 'array',
      title: 'Location',
      of: [{ type: 'locationObject' }],
      ...currentTeamOnly('Location'),
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{ type: 'linkObject' }],
      hidden: ({ document }) => Boolean(document?.alumni),
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
        subtitle: alumni
          ? 'Alumni'
          : ['Current team', city].filter(Boolean).join(' · '),
      };
    },
  },
};

export default dmlien;
