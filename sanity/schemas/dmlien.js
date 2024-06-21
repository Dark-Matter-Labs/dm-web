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
      name: 'bio',
      type: 'text',
      title: 'Bio',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      description:
        'use an emoji for the country then add the city name like: 🇦🇺 Adelaide, if there are two cities it can be like this: 🇦🇺 Adelaide 🇫🇷 Paris',
    },
  ],
};

export default dmlien;
