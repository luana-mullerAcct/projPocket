import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I'm on the login page", () => {
    cy.visit("https://www.johnjohndenim.com.br/login");
})

When("I do login using correct email and password", () => {
   cy.get('.vtex-login-2-x-emailPasswordOptionBtn').click();
   cy.get('.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').click().type('luana.muller@acct.global');
   cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').click().type('Vbc71@45');
})

Then("I must be logged on the site", () => {
    cy.get('.vtex-login-2-x-sendButton > .vtex-button').click();
})

