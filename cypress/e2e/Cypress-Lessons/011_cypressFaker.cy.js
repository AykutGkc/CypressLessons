///<reference types="cypress"/>

const { faker } = require("@faker-js/faker");

let username = faker.name.firstName();
let email = faker.internet.email();
let password = faker.internet.password();
let address = faker.location.country();

describe("Cypress Faker", () => {
  it("Fakerjs-Cypress-1", () => {
    cy.visit("https://practice.expandtesting.com/login");
    cy.get("#username").type(username, { log: false });
    cy.get("#password").type(password, { log: false });
  });

  it("Fakerjs-Cypress-2", () => {
    cy.visit("https://practice.expandtesting.com/login");
    cy.get("#username").type(address, { log: false });
    cy.get("#password").type(password, { log: false });
  });
});

describe("Cypress Faker-2", () => {
  it.only("Fakerjs Cypress", () => {
    cy.visit("https://automationexercise.com/login");
    cy.get('[data-qa="login-email"]').type(username);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();

    cy.get('[data-qa="login-email"]')
      .invoke("prop", "ValidationMessage")
      .should(
        "eq",
        `Please include an '@' in the email address. '${username}'is missing an '@'.`
      );
  });
});
