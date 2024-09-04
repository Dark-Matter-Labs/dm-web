const locationObject = {
  name: 'locationObject',
  type: 'object',
  title: 'Location',
  fields: [
    {
      name: 'countryCode',
      type: 'string',
      title: 'Country Code',
      description: 'please add the two letter country code',
      validation: (Rule) => Rule.required().max(2).min(2),
    },
    {
      title: 'City',
      name: 'city',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default locationObject;
