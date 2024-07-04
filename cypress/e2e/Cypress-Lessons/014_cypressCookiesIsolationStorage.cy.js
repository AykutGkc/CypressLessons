///<reference types="cypress"/>

describe("Cypress Clear Cookies", () => {
  it("Cypress Cookies", () => {
    cy.on("uncaught:exception", (err, runnable) => { return false;});
    cy.visit("https://practice.expandtesting.com/upload");

    cy.getCookies().should('have.length',5)
    cy.clearCookies()
    cy.getCookies().should('have.length',0)
    cy.getCookies().should('be.empty')
  });

  it("Cypress belirli Cookies temizleme", () => {
    cy.on("uncaught:exception", (err, runnable) => { return false;});
    cy.visit("https://practice.expandtesting.com/upload");

    cy.getCookies().should('have.length',5)
    cy.clearCookie('express:sess')
    cy.clearCookie('express:sess.sig')

    cy.getAllCookies().should('have.length',3)
    
  });

});

describe("Cypress Cookies Ekleme", () => {
  it("Cypress Cookies", () => {
    cy.on("uncaught:exception", (err, runnable) => { return false;});
    cy.visit("https://practice.expandtesting.com/upload");

    cy.setCookie('test','cypress-Cookies')

    cy.wait(2000)

    cy.clearAllCookies();
  });

});

describe("Cypress Test Isolation",{testIsolation:false}, () => {

  before(() => {
    cy.on("uncaught:exception", (err, runnable) => { return false;});
    cy.visit("https://practice.expandtesting.com/upload");
  });
  it("Cypress Test Isolation", () => {
   
    cy.get("#fileInput")
      .should("be.visible")
      .attachFile({ filePath: "../fixtures/media/cypressLogo.jpeg" });
    cy.get("#fileSubmit").should("be.visible").and("contain", "Upload").click();

  });

  it("Cypress Test Isolation-2", () => {
  cy.get("ol > li:nth-child(1) > a").should("be.visible").click();

  });

});

describe("Cypress Test Isolation-2",{testIsolation:false}, () => {

  before(() => {
    cy.on("uncaught:exception", (err, runnable) => { return false;});
    cy.visit("https://practice.expandtesting.com/inputs");
  });
  it("Cypress Test Isolation", () => {
   cy.get("#btn-display-inputs")
      .should("be.visible").click();
    cy.get("#output-number").should("be.empty")

  });

  it("Cypress Test Isolation-2", () => {
  cy.get("#btn-clear-inputs").should("be.visible").click();
  cy.get('#input-number').should("be.empty").type('123');
  cy.get("#btn-display-inputs").should("be.visible").click();
  cy.get("#output-number").should("not.be.empty").and('contain','123')
  });

});

describe('Cypress Local Storage', () => {
  it('Cypress Local Storage', () => {
    cy.on("uncaught:exception", (err, runnable) => { return false;});
    cy.visit("https://practice.expandtesting.com/upload");

    cy.log(localStorage.length)
    localStorage.setItem('clarusway','test') //localStorage ekler
    localStorage.setItem('cypressLessons','CypressLocalStorage') //localStorage ekler
    cy.log(localStorage.length)
    
    cy.wait(2000).then(() => {
      localStorage.removeItem('clarusway','test') //belirli local storage siler
      cy.log(localStorage.length)
    })

    cy.wait(2000).then(() => {
      localStorage.clear() //Tüm local storage siler
      cy.log(localStorage.length)
    })



  });
});



