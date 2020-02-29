# hs-coding-challenge-tw

> Health Sqyre Coding Challenge built with Vue and TailwindCss

## Description

This project was built using the vue-cli and tailwindcss, a lightweight css framework for building components and ui's. I structured the project as a list of reused Product components to display the products in a grid, ordered by product id's and then by the lowest price. The descriptions were trimmed to show a brief description and a button can be clicked to show the full info to the user. I did want to get some better responsiveness into the ui, but I had already put a fair amount of time to get the grid structured the way I liked. I am also not as familiar with using css grid styling so when a full description is clicked, it expands all of the other grid items due to the nature of it. In retrospec, this is something I would have improved on and either not use css grid or adjust it to fix the odd height issue. Overall, I am content with how it turned out.

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
