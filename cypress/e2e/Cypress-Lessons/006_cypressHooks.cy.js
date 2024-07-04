///<reference types="cypress"/>

import homepage from "../../support/pageObjects/homepage/homepage";

describe('Cypress Hooks', () => {
    before(() => {
       cy.log('Test basliyor')

    });

    beforeEach(() => {
        cy.on('uncaught:exception',(err,runnable)=>{return false});
        homepage.navigate()
        cy.log('Sayfa Hatasiz acildi')
    });
    after(() => {
        cy.logout();
        cy.log('Test Tamamlandi!!!')
    });
    afterEach(() => {
        cy.log('It blogu tamamlandi!!!')
    });
    it('Sayfaya gidelim Dogrulama yapalim', () => {
        homepage.verifyUrl('automationtesting')
        homepage.verifyTitle('My Account – Automation Practice Site')

    });

    it('Before kullanim örnegi', () => {
        cy.login3('Test','123456','Login')
    });
    it('BeforeEach kullanimi', () => {
      cy.login3('deneme123@test.com','Deneme@12345','Login')

    });
});