# Block Events Finder

Application which displays block parties and fairs happening in Berlin and provides detailed information with map location.

# TechStack used

Since I decided to create a mobile-first Frontend application, the tech stack I finalised upon is:

- ReactJS
- HTML5
- CSS3
- Jest
- React Testing Library

I haven't used any component library in this project, and decided to write custom CSS for the required components along with media-queries to make the application mobile-first in true sense. React along with JavaScript provides a good setup for creating Single Page application (SPA) like these, hence I went ahead with this combination. The other option I had was Angular with TypeScript as well. Creating a PWA from a react application is also a simple process, and could be added to this application as an add-on feature.

Using Jest with React Testing library was a natural choice to write robust, clean tests for each component.

# Application Structure

I've followed a modular based approach while structuring this application. Although our application is pretty small, this approach scales well in extending an application codebase, hence I decided to use it. Here, all the individual components are in separate folders with `index.js` file along with a `<filename>.test.js` test file. This makes it easy for the reviewer to understand the tests and also go through the code implementation without jumping into other folders.

All the components have their separate stylesheets inside `/styles` folder while helps in preserving CSS namespace, I followed a BEM based naming for CSS classes as well. The `app.css` file is the one for parent component.


# How to run

1. Clone this repo using `git clone` command.
  
2. run: `yarn` to install all the dependencies.
  
3. run: `yarn start` to start the application.
  
The application is deployed here: https://berlin-events-finder.netlify.app  

# Application Features

1. Code splitting and Lazy loading the events lists to improve the application performace and reduce the initial bundle size.
2. Event Filteration based on Berlin's district.
3. Implemented debouncing while filtering for events, to improve application performance by avoiding unnecessry rendering.
4. `Open in Maps` option, to open the event location inside google map directly, provided a more intuitive user experience.
5. Mobile first responsive application, with custom CSS and media queries.
6. Card based grid layout, that provides a clean UI to view all the information together.
7. CRA comes with webpack, jest installed already. I've used Jest and React Testing Library for writing unit tests for each component, and test coverage around 80%.

# Scope of Improvement

Given the limited time duration for creating this, I have implemented many must-have requirements. However, I think if given more time, I would definetely improve this application by doing the following:

1. The API data is not sanitized. We can have a mechanism in place in which the required fields in the response are available for all the events.
2. I have implemented Event filteration logic based on the event's district. We can definetely have more filters like event dates and time.
3. Implementing infinite Scrolling for the events list, so that new events gets added to the DOM only when the user scolls to bottom. This will improve the responsiveness of the application in cases where the events array is really long, and we don't have pagination.
4. I have used Google maps endpoint along with address to show the event location to the end user. Although this approach works well, we can also implement Google's geolocation API features which can provide an accurate geographical position of given address on the map. We would require latitudes and longitudes for each event in this case, which our current endpoint doesn't provide. We can get the latitudes/longitudes from the event's address using a third party API.
5. Although currently, I've added unit testing for all the components, we can definetely try to make tests more rebust. Adding interactive tests using Storybook to model user behaviour in these tests.
6. Bookmarking favourite events functionality for the user, and persisting it in the local storage for easy retreival.
7. Adding alerts whenever a new event in the given location is scheduled, push notifying the user directly.
