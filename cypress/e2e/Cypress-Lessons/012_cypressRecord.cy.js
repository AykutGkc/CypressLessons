///<reference types="cypress"/>

describe("Cypress Record", () => {
  it("Record with test runner ", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://practice.expandtesting.com/my-browser');
    cy.get('.navbar-brand').click();
    cy.get('#examples > :nth-child(3) > :nth-child(2) > .card > .card-body > .card-title > .my-link').click();
    cy.get(':nth-child(1) > .card > .card-body > .row > .row-md-6 > :nth-child(2) > .form-check-label').click();
    cy.get('#red').check();
    cy.get(':nth-child(1) > .card > .card-body > .row > .row-md-6 > :nth-child(3)').click();
    cy.get('.row-md-6 > :nth-child(4)').click();
    cy.get(':nth-child(2) > .card > .card-body > .row > .row-md-6 > :nth-child(1) > .form-check-label').click();
    cy.get('#basketball').check();
    cy.get(':nth-child(2) > .card > .card-body > .row > .row-md-6 > :nth-child(2) > .form-check-label').click();
    cy.get('#football').check();
    cy.get('.navbar-brand').click();
    cy.get('#examples > :nth-child(3) > :nth-child(1) > .card > .card-body > .card-title > .my-link').click();
    cy.get('#browser-toggle').click();
    cy.get('#browser-user-agent').click();
    cy.get('#browser-version').click();
    /* ==== End Cypress Studio ==== */
   
    
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('practice with test record', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://practice.expandtesting.com/my-browser');
    cy.get('#browser-toggle').click();
    cy.get('#browser-toggle').click();
    cy.get('#examples-dropdown').click();
    cy.get('.navbar-brand').click();
    /* ==== End Cypress Studio ==== */
  });
});
