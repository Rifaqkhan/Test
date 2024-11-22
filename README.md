Cypress BDD Project for Boost Casino
This repository contains automated tests for Boost Casino using Cypress and the Behavior-Driven Development (BDD) approach. The tests validate various features of the Boost Casino website such as language selection, navigation, and homepage features.
Prerequisites
Ensure the following are installed on your system:

Node.js (v22 or higher)

Download Node.js
Verify installation with:
node -v
npm -v
npm (comes with Node.js)

Install Dependencies
Install the required dependencies:
npm install
npm install cypress
npm install cypress-cucumber-preprocessor 

check that cypress is install and running properly
npx cypress open

verify cucumber in package.json
"cypress-cucumber-preprocessor": "^4.3.1"
add this after dependencies
"cypress-cucumber-preprocessor": {
    "nonGlobalStepdefinitions": false,
    "step_definitions": "cypress/e2e/stepDefinitions/*"
  }

add these settings in cypress.config.js

const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
    },
    specPattern: 'cypress/e2e/feature/*.feature',
    baseUrl: 'https://www.boostcasino.com/', // Update to your base URL
    viewportWidth: 1280, // Set your desired viewport width
    viewportHeight: 720, // Set your desired viewport height
    chromeWebSecurity: false,
  },
});

npx cypress open

