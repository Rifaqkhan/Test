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
