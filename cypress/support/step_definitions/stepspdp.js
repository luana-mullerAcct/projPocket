import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps/index";

Given("I'm on the product page", () => {
    cy.visit("https://www.johnjohndenim.com.br/camisa-ampla-matt-john-john-feminina-xadrez-13-01-5920/p?skuId=960");
})