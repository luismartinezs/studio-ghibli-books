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
    - Convert stateless components to functions
    - Add propTypes method to each stateless functional component that defines what the prop types must be

Maybe:
- When click, on popular, go to popular section: https://codepen.io/takatama/pen/mVvbqx
- Separate search bar and logo into different components so that I don't need to always have one with the other
- in popular section show movies ordered by rating