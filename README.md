Step 1: Install cypress-cucumber-preprocessor
npm install --save-dev cypress-cucumber-preprocessor

Step2: Need to add below code in cypress.config.js file
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/Features/*.feature",
  },
});

Step 3:Need to add below code in package.js file after the devDependencies section
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinations": true,
    "stepDefinitions": "cypress/e2e/PageObjects/"
  }

Step 4: Create "Test.feature" file under e2e/Features and paste below code
Feature: Feature Name
    @TagName
    Scenario: Scenario Name
        Given Home page is opened

Step 5: Create "Test_StepDef.js" file under e2e/PageObjects
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
Given('Home page is opened', function() {
    cy.visit("https://www.saucedemo.com/")
    cy.wait(7000)
})
