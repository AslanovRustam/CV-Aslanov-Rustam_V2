import filmoteka from '../images/filmoteka.jpg';
import barberShop from '../images/barbershop.jpg';
import phoneBook from '../images/phonebook.jpg';
import movieFinder from '../images/movie-finder.jpg';
import imageFinder from '../images/image-finder.jpg';
import countries from '../images/country.jpg';
import webStudio from '../images/webstudio.jpg';
import description from '../images/description.svg';
import tools from '../images/tools.svg';
import qatests from '../images/QATests.jpg';

export const teamProjects = [
  {
    name: 'QATests',
    url: 'https://fin-proj-gr7.netlify.app/auth',
    screenshot: qatests,
    description: 'app for testing QA Engineers (role: scrum master, developer)',
    stack: 'JS, SASS, HTML, React App, REST API, GIT, Figma, Trello',
    icons: { description, tools },
  },
  {
    name: 'Filmoteka',
    url: 'https://adya27.github.io/js-project-group4/',
    screenshot: filmoteka,
    description: 'movie search and storage app (role: developer)',
    stack: 'JS, SCSS, HTML, Handlebars, Parcel, REST API, GIT, Figma, Trello',
    icons: { description, tools },
  },
  {
    name: 'BarberShop',
    url: 'https://aslanovrustam.github.io/Barbershop/',
    screenshot: barberShop,
    description: 'landing page for hair salon for men (role: developer)',
    stack: 'HTML, CSS, JS, Parcel, GIT, Figma, Trello',
    icons: { description, tools },
  },
];

export const ownProjects = [
  {
    name: 'PhoneBook',
    url: 'https://aslanovrustam.github.io/goit-react-hw-08-phonebook/',
    screenshot: phoneBook,
    description: 'app for working with private collections of contacts',
    stack: 'React, Redux, JS, SCSS, HTML, REST API, AXIOS, Git',
    icons: { description, tools },
  },
  {
    name: 'MovieFinder',
    url: 'https://arg.netlify.app/',
    screenshot: movieFinder,
    description: 'movie finder app with actors details and reviews',
    stack: 'React, JS, CSS, HTML, REST API, AXIOS, Netlify',
    icons: { description, tools },
  },
  {
    name: 'ImageFinder',
    url: 'https://aslanovrustam.github.io/goit-react-hw-04-hooks-images/',
    screenshot: imageFinder,
    description: 'images and photos search app',
    stack: 'React, JS, HTML, CSS, REST API, GIT',
    icons: { description, tools },
  },
  {
    name: 'Countries',
    url: 'https://aslanovrustam.github.io/goit-js-hw-12-countries/',
    screenshot: countries,
    description: 'find country by name and see description',
    stack: ' JS, HTML, CSS, GIT',
    icons: { description, tools },
  },
  {
    name: 'WebStudio',
    url: 'https://aslanovrustam.github.io/goit-markup-hw-08/',
    screenshot: webStudio,
    description: 'app for a web studio',
    stack: 'HTML, SCSS, JS, GIT, Figma',
    icons: { description, tools },
  },
];
