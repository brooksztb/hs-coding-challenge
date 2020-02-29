# hs-coding-challenge-tw

> Health Sqyre Coding Challenge built with Vue and TailwindCss

## Description

This project was built using the vue-cli and tailwindcss, a lightweight css framework for building components and ui's. I structured the project as a list of reused Product components to display the products in a grid, ordered by product id's and then by the lowest price. The descriptions were trimmed to show a brief description and a button can be clicked to show the full info to the user. I did want to get some better responsiveness into the ui, but I had already put a fair amount of time to get the grid structured the way I liked. I am also not as familiar with using css grid styling so when a full description is clicked, it expands all of the other grid items due to the nature of it. In retrospec, this is something I would have improved on and either not use css grid or adjust it to fix the odd height issue. Overall, I am content with how it turned out.

## Coding Challenge Requirements

## The Challenge

Using whatever method you wish (_We're big fans of Vue.js, Python, and Ruby here, but you are free to use another language or library, keep in mind this position is heavy on the frontend_), write a component that gets the information from the data file and displays it in an HTML template.

## Requirements

- [x] **REQUIREMENT 1:** Get the data, display the names of each product in a list
- [x] **REQUIREMENT 2:** Format each list item so that it shows the product name, vendor name, price, and description
- [x] **REQUIREMENT 3:** Sort the list so that vendors with the lowest id appear first, highest id appear last

### BONUS

**BONUS**: Sort the list based on price, lowest price first

**BONUS**: Make it look cool. Be creative!

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
