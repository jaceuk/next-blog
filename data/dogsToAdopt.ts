const dogsToAdopt = {
  title: 'Dogs to Adopt',
  image: 'dogs-to-adopt.jpg',
  intro:
    'A website to help abandoned dogs find new homes by allowing users to search dog shelters that are within their area.',
  type: 'Website',
  tags: ['HTML', 'React', 'CSS/Sass', 'NodeJS', 'MySQL', 'Handlebars', 'Javascript', 'UX/UI', 'REST API', 'Express'],
  text: [
    'Being a big dog lover this passion project saw me dealing with all aspects including UX/UI and full stack development.',
    'Users are able to enter their postcode and retrieve a lsit of dogs that are available for rehoming within their area rather than having to individually search through multiple rehoming websites.',
  ],
  lighthouseScores: ['90', '98', '97', '100'],
  features: [
    {
      title: 'REST API',
      text: ["The site gets it's data from a REST API built using NodeJS and Express."],
    },
    {
      title: 'Bespoke admin area',
      text: ['The project also involved designing and building a fully featured admin area for data entry.'],
    },
    {
      title: 'Automatically updated',
      text: ['Dogs looking for new homes are automatically updated overnight, keeping the site up to date.'],
    },
    {
      title: 'Responsive',
      text: ['Fully responsive across all mobile devices and tablets.'],
    },
  ],
};
export default dogsToAdopt;
