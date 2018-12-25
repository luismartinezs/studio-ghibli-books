API: https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API

- Create production branch
- Create mobile-home branch

- adjust design to make it more mobile friendly, and add more white space OK
- create ui for product detail page, imitate this: https://www.monogranofelicetti.it/en/
  - create detail layour responsive for 720px width
- create ui for checkout

  - make item list resposive for large screen
    - format header row
    - put each

- Design retouch:

  - Use generic empty image instead of real book cover OK
  - Change main banner background image OK
  - Change colors OK
  - Change static texts OK
  - Use fontawesome icons instead of the ones Im using for categories OK
  - use studio ghibli logo instead of ring OK

- State:

  - Add provider, wrapper and presentational in between App and Wrapper OK
  - Add basic Redux infrastructure OK

- Interaction:

  - When clicking on home icon, user goes to home page OK
  - When I click on cart, go to cart OK
  - When I click on product, go to detail OK
  - If I click in home / detail / cart, I should always land in the top of the page OK

  - add collapsible menu in mobile view

    - Design and code the static version OK
    - toggle it when clicking hamburguer / X button OK
    - have buttons go to corresponding page OK

  - Get json object OK
  - get dynamic website data from json

    - dynamically display title of one movie in main banner OK
    - dynamically display 5 items in most popular OK
    - dysplay info in detail page OK

  - Code simple error page: if fetch is not managed, show error page instead of home OK

  - Able to add items to cart OK
    - provide as props OK
  - Able to remove items from cart, and have price dynamically updated OK
  - dynamically show info of products in cart OK

- Structure:

  - remove console.logs OK
  - Convert stateless components to functions NO
  - Add propTypes method to each stateless functional component that defines what the prop types must be
  - Comment code NO

- Corrections:

  - intenta separar el codi en funcions més petites
    - per exemple al cart has de fer el render més petit critant a altres funcions OK
  - estas segur k en el render va tot el html allà ? no es pot posar en un fitxer a part? OK
  - model no s’hauria de dir model.js sino movie.js OK
  - la crida a api no hauria d’estar al model sinó al controlador OK
  - i enlloc de crear la array de movies manualment pots utilitzar una llibreria k ho fa a partir del json k t’arriba

- Update:

  - import img src instead of adding the relative path // not sure how to do this, I'm using "require" DONE
  - remove all the default create-react-app files and readmes DONE
  - write own readme DONE
  - Do the async call with Redux.applyMiddleWare DONE
  - Pass the price with the data instead of generating it in the component DONE
  - Use defaultProps for each component
  - Use propTypes for each component
  - Use fragments instead of divs to group elements
  - Redesign loading page
  - Redesign error page
  - Use scss partials to import styles for each part, on separate files, into one file
  - Add styles with scss, @each loop to generate themes
  - Use error boundaries for showing the load and error screens
  - Use Routing for the different pages (may not work in github though)
  - Use component composition to prevent passing props down the componment tree
  - Using context: allow user to select style
    - User can select style from interface
  - If any common functionality across components, compose it in HOCs
  - somewhere there should be a modal or a tooltip created with portals
  - test that components render with Jest-react
  - test with Enzyme

Maybe:

- When click, on popular, go to popular section: https://codepen.io/takatama/pen/mVvbqx
- Separate search bar and logo into different components so that I don't need to always have one with the other
- in popular section show movies ordered by rating
- Add propTypes method to each stateless functional component that defines what the prop types must be
- By clicking the "see more" button, it should be possible to list more movies