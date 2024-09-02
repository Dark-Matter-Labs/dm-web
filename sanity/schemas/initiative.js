const initiative = {
    name: 'initiative',
    type: 'document',
    title: 'Initiative',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Initiative Image',
        fields: [
            {
                name: 'alt',
                type: 'string',
                title: 'Caption'
            }
        ]
      },
      {
        name: 'title',
        type: 'string',
        title: 'Initiative Title',
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Initiative Subtitle',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Initiative description',
      },
    ],
  };
  
  export default initiative;
  