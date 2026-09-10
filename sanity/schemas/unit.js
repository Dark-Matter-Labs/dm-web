/**
 * Labs, Arcs and Studios are the three "units" of the Dm ecosystem Matrix.
 * Their documents are structurally identical, so they share one definition
 * here rather than being maintained as three near-identical files.
 */

const portableTextDescription = (label) => ({
  title: 'Description',
  name: 'content',
  type: 'array',
  description: `Description of the ${label}, shown in its popup on the homepage.`,
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              { title: 'URL', name: 'href', type: 'url' },
              { title: 'Open in new window', name: 'blank', type: 'boolean' },
            ],
          },
        ],
      },
    },
  ],
});

/**
 * @param name    document type name, e.g. 'labObject'
 * @param title   Studio-facing document title, e.g. 'Lab'
 * @param label   lower-case noun used in field descriptions, e.g. 'lab'
 */
export function createUnitSchema({ name, title, label }) {
  return {
    name,
    type: 'document',
    title,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: `Name of the ${label}`,
        description:
          'The full, canonical name. Used in the popup heading and anywhere the unit is listed.',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'homepage_matrix_name',
        type: 'string',
        title: 'Short name for the homepage Matrix',
        description:
          'Optional. The homepage Matrix tiles are only 80px wide, so long names are abbreviated there — e.g. “Neighbour. Futures” for “Neighbourhood Futures”. Leave empty to use the full name.',
        validation: (Rule) => Rule.max(24),
      },
      {
        title: 'Matrix code',
        name: 'value',
        type: 'string',
        description:
          'The short code shown in the corner of the Matrix tile, e.g. NE, 7G, NZC.',
        validation: (Rule) => Rule.required().min(1).max(3),
      },
      {
        name: 'image',
        type: 'image',
        title: `${title} Image`,
        validation: (Rule) => Rule.required(),
        fields: [{ name: 'alt', type: 'string', title: 'Caption' }],
      },
      portableTextDescription(label),
      {
        name: 'links',
        type: 'array',
        title: 'Links',
        description:
          'Shown as buttons in the popup. Use the link text to say what it is — Website, Blog, Whitepaper, Keynote.',
        of: [{ type: 'linkObject' }],
      },
    ],
    orderings: [
      {
        title: 'Matrix code A–Z',
        name: 'valueAsc',
        by: [{ field: 'value', direction: 'asc' }],
      },
      {
        title: 'Name A–Z',
        name: 'titleAsc',
        by: [{ field: 'title', direction: 'asc' }],
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
        value: 'value',
        matrixName: 'homepage_matrix_name',
      },
      prepare({ title, media, value, matrixName }) {
        return {
          title: value ? `${value} · ${title}` : title,
          subtitle: matrixName ? `Matrix tile: ${matrixName}` : undefined,
          media,
        };
      },
    },
  };
}
