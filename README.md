[![Build Status](https://travis-ci.org/noordean/shotly-frontend.svg?branch=develop)](https://travis-ci.org/noordean/shotly-frontend)
[![Coverage Status](https://coveralls.io/repos/github/noordean/shotly-frontend/badge.svg?branch=develop)](https://coveralls.io/github/noordean/shotly-frontend?branch=develop)
[![Code Climate](https://codeclimate.com/github/noordean/shotly-frontend/badges/gpa.svg)](https://codeclimate.com/github/noordean/shotly-frontend)
# Shotly
Shotly is a simple application that shortens long and ugly urls. This application allows people to register, create shortened links, and provide graphical representation of number of people that have used the shortened links.

## Development
This repository contains only the frontend part of the application. The backend was created separately and can be found <a href='https://github.com/noordean/shotly' target='_blank'>here</a>. The backend(API) was developed using Ruby on Rails with PostgreSQL for persisting data. The frontend was built using reactJs with redux framework.

## Installation
- Clone this repository to have the app on your machine with ``` git clone https://github.com/noordean/shotly-frontend.git ```
- Change directory to the app's root with ```cd shotly-frontend```
- Pull the develop branch with ```git pull origin develop```
- Then run ```npm install``` to install the dependencies
- Start the app with ```npm start```, visit http://localhost:3030 to view the app.
- Run ```npm test``` to run the tests.

## Technologies Used
- <b>Javascript ES6:</b> ES6 is the sixth major release of the javascript language specification. It enables features like constants, arrow functions, template literals, spread opeartor, etc.
- <b>React:</b> Facebook open source, efficient, javascript library for building front-end projects.
- <b>Babel:</b> Babel transpiles es6 codes to es5.
- <b>Webpack:</b> Webpack is used to bundle modules and does tasks automation.
- <b>Axios:</b> Axios is an http client library used in consuming API.

## How to Contribute
- Fork this repository
- Clone it
- Create your feature branch on your local machine with ```git checkout -b your-feature-branch```
- Push your changes to your remote branch with git push origin your-feature-branch
- Open a pull request to the develop branch, and describe how your feature works

Go <a href='https://github.com/noordean/shotly' target='_blank'>here</a> to view the full available endpoints.

### Author
Nurudeen Ibrahim.