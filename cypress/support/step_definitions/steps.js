import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"


Given("I'm on the login page", () => {
    cy.visit("https://www.johnjohndenim.com.br/login");
})

When("I do login using incorrect password", () => {
    cy.get('.vtex-login-2-x-emailPasswordOptionBtn').click();
    cy.get('.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').click().type('luanamuller@acct.global');
    cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').click().type('Vbc71@44');
 })

 Then("Must be informed that the data access are wrong", () => {
    cy.get('.vtex-login-2-x-sendButton > .vtex-button').click()
    //cy.contains(vtex-login-2-x-formError).should('be.visible')
})


When("I do login using correct email and password", () => {
   cy.get('.vtex-login-2-x-emailPasswordOptionBtn').click();
   cy.get('.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').click().type('luana.muller@acct.global');
   cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').click().type('Vbc71@45');
})

Then("I must be logged on the site", () => {
    cy.get('.vtex-login-2-x-sendButton > .vtex-button').click();
})


Given("I'm on the product page", () => {
    cy.visit("https://www.johnjohndenim.com.br/vestido-amplo-cherry-john-john-feminino-preto-15-11-4412/p");
})

When("Validate price block ", () =>{
    cy.contains(vtex-product-price-1-x-sellingPriceValue).should('be.visible')
})


Then("Validate product image", () => {
    cy.get('.swiper-slide-active > .vtex-store-components-3-x-productImage > .relative > div > .vtex-store-components-3-x-productImageTag').should('have.attr','src="https://johnjohndenimqa.vtexassets.com/arquivos/ids/161096-800-auto?v=638290986358500000&width=800&height=auto&aspect=true"')
})