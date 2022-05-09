const BluePrismDesktop = {
  title: 'ESO Builder',
  image: 'eso-builder.jpg',
  intro:
    'A companion web app to support The Elder Scrolls Online, a popular massively multiplayer online roleplaying game.',
  type: 'Web app',
  tags: ['HTML', 'React', 'CSS/Sass', 'JavaScript', 'UX/UI', 'PHP', 'MySQL', 'Slim', 'REST API'],
  text: [
    'This web app allows players to plan out their in game characters without being in the game itself.',
    'The web app is powered be data retrieved from a REST API with player choices retained between visits.',
    'I was responsible for all aspects of this project.',
  ],
  lighthouseScores: ['93', '97', '100', '100'],
  features: [
    {
      title: 'REST API',
      text: [
        "The site gets it's data from a REST API built using the Slim micro framework for PHP with a bespoke admin area for data entry. ",
      ],
    },
    {
      title: 'Responsive',
      text: ['Fully responsive across all mobile devices and tablets.'],
    },
  ],
};
export default BluePrismDesktop;
