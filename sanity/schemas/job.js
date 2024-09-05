const jobObject = {
  name: 'jobObject',
  type: 'document',
  title: 'Job',
  fields: [
    {
      title: 'Position Name',
      name: 'positionName',
      type: 'string',
      title: 'Position name',
      description: 'name of the position',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      description: 'Link to BeApplied job post',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Contract Type',
      name: 'contract_type',
      type: 'string',
      options: {
        list: [
          { title: 'Part-Time', value: 'parttime' },
          { title: 'Full-Time', value: 'fulltime' },
          { title: 'Subcontractor', value: 'subcontract' },
        ],
      },
    },
    {
      title: 'Length',
      name: 'length',
      type: 'number',
      description: 'How long is the position for, in months',
    },
    {
      title: 'Closing date',
      name: 'close_date',
      type: 'date',
      description: 'Last date to apply by',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'array',
      of: [{ type: 'locationObject' }],
    },
  ],
};

export default jobObject;
