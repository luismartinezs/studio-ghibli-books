# Studio Ghibli Ecommerce

Small App that consumes the [Studio Ghibli API](https://ghibliapi.herokuapp.com/) and displays a minimal fully-responsive responsive ecommerce. Currently it has a Home, a Detail page and a Shopping Cart.

See the App user interface here: https://luismartinezs.github.io/studio-ghibli-books/

This project was done as a class exercise to learn / practice React.

## Current pipeline

Since I've gone through most of the React documentation, I know now more than when I created this app, so I plan to work on these main aspects:

- Clean up the code and the documentation (this file is an example), improve the design of the error and loading pages
- Use React "advanced" tools to improve the code: defaultProps, propTypes, fragments, HOCs, context, routers, error boundaries...
- Call to the API using Redux built-in applyMiddleWare method
- Add basic tests with Jest, and perhaps with Enzyme

The main purpose is still to learn and to put what I learned to practice.

## Installing

This project uses react, redux, react-redux and [fortawesome modules](https://fontawesome.com/how-to-use/on-the-web/using-with/react).

If you want to play around with it, clone it into a new repo:

```
git clone https://github.com/luismartinezs/studio-ghibli-books.git
```

And then just run `npm install` on the cloned repo.

## Deployment

Run `npm run build` to generate a production build.

If you want to deploy the repo to github, you can follow these steps:

1. Create new repo in github
2. Create react app project, and initiatie git local repo: git init, git add ., git commit -m "first commit"
3. Set github repo as your remote repo: git remote origin https://github.com/user/repository.git
4. Make changes to the local repo
5. npm run build
6. Paste `"homepage": "http://username.github.io/myapp"` in package.json, after "private" (change the url)
7. Add this to package.json after eject key
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
8. Run: npm install --save-dev gh-pages
9. Run: npm run deploy
10. In git-hub > repo > settings, under the heading GitHub Pages / source, select gh-pages branch, and save
11. Try the link provided, if it doesn't work, select another branch, save, select again gh-pages, save. Reload page. It may take a few seconds/minutes for the web to show up.

## Built with

- HTML and CSS
- JavaScript ES6
- [React 16.6.3](https://reactjs.org/)
- [Redux](https://redux.js.org/) - State management framework for JS

## Author

- Luis Martínez - https://luismartinezs.github.io/

## Misc

- The Ghibli API was provided by a class exercise that involved creating this ecommerce. I do love Ghibli movies though :)
- For the design I tried to go mobile first, and took inspiration on this website: https://www.monogranofelicetti.it/en/, to choose the colors I used this resource https://material.io/tools/color