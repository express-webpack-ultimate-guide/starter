[![Maintainability](https://api.codeclimate.com/v1/badges/afcbeb9e790525675375/maintainability)](https://codeclimate.com/github/express-webpack-ultimate-guide/starter/maintainability)
[![dependencies Status](https://david-dm.org/express-webpack-ultimate-guide/starter/status.svg)](https://david-dm.org/express-webpack-ultimate-guide/starter)
[![devDependencies Status](https://david-dm.org/express-webpack-ultimate-guide/starter/dev-status.svg)](https://david-dm.org/express-webpack-ultimate-guide/starter?type=dev)
[![Build Status](https://travis-ci.com/express-webpack-ultimate-guide/starter.svg?branch=master)](https://travis-ci.com/express-webpack-ultimate-guide/starter)

A starter project for building websites using Express.js and Webpack. It provides hot-reloading for both client
and server code, as described in the 
"[Express|Webpack - The ultimate guide](https://express-webpack-ultimate-guide.github.io/)"  ebook. Additionally it 
offers linting and testing

## Features
- [Express.js](https://expressjs.com/) as backend framework
- [Webpack](https://webpack.js.org/) with [Hmr](https://webpack.js.org/concepts/hot-module-replacement/) enabled
- Compile SCSS and process with [PostCSS](https://postcss.org/) ([Autoprefixer](https://github.com/postcss/autoprefixer) included by default)
- Compile client JS using [BabelJS](https://babeljs.io/)
- Production-ready build with asset hashing and minification
- Linting with [ESLint](https://eslint.org/) and [StyleLint](https://stylelint.io/)
- Server testing with [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/)
- Client testing with [Karma](https://karma-runner.github.io/latest/index.html), [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/)
- Basic CI setup for [Travis](https://travis-ci.com)

## Getting started

Clone the project

    git clone git@github.com:express-webpack-ultimate-guide/starter.git
    cd starter/
    
Install dependencies

    yarn install

Run the app in development mode

    yarn start
    
Point your browser to http://localhost:3000

## Linting

    yarn lint:css # run StyleLint
    yarn lint:js # run ESLint

Note: linting is also integrated in webpack, so you'll also see the warnings while running `yarn start`

## Testing

    yarn test:client # run client tests using Karma and watch
    yarn test:server # run server tests using Mocha and watch

    yarn ci:test:client # run client tests once for CI
    yarn ci:test:server # run server tests once
