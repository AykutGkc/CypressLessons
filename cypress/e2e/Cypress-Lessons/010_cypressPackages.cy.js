///<reference types="cypress"/>

describe("Cypress Packages", { tags: ["@packages", "@cypress"] }, () => {
  it("Cypress iframe", { tags: "@iframe" }, () => {
    cy.visit("https://practice.expandtesting.com/iframe");

    cy.iframe("#mce_0_ifr")
      .find("p")
      .clear()
      .then(() => {
        cy.iframe("#mce_0_ifr").find("p").type("Cypress Lessons");
      });

    cy.iframe("#email-subscribe")
      .find('input[id="email"]')
      .should("be.visible")
      .type("example@examle.com");
  });

  it("Cypress If", { tags: "@if" }, () => {
    cy.visit("https://practice.expandtesting.com/login");

    cy.get("input#username").if("visible").type("test");
    cy.get("input#password").if("visible").type("Deneme");
    cy.wait(2000);
    cy.get("#login > .btn")
      .if()
      .contains("button", "Login")
      .click()
      .then(() => {
        cy.get("#flash-message").if("contain", "Your username is invalid!");
      })
      .else()
      .log("Test pass");
  });
  it("Cypress Trigger", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    cy.get("#column-a").trigger("mousedown",{button: 1})
    cy.get("#column-b").trigger("mousemove").trigger('mouseup',{forve:true})
  });
  it('Cypress Real events', () => {
    cy.visit('https://practice.expandtesting.com/hovers')
    cy.wait(1000)
    cy.get('div.figure').first().realHover().then(() => {
      cy.wait(3000)
      cy.get('div:nth-child(4)>div>a').realClick()
    });

    
  });
});
