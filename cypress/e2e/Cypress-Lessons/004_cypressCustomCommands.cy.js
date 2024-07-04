///<reference types="cypress"/>

import homepage from "../../support/pageObjects/homepage/homepage";
describe('Cypress Custom Comands kullanimi-1', () => {
    it('örnek kullanim', () => {
        cy.on('uncaught:exception',(err,runnable)=>{return false});

        //Ana sayfa erisim ve url basligi dogrulama
        homepage.navigate()
        homepage.verifyUrl('automationtesting')
        homepage.verifyTitle('My Account – Automation Practice Site')

        cy.login();
    });

    it('Örnek kullanim-2', () => {
        cy.navigatePage()
        cy.verifyUrlAndTitle('.automationtesting.','My Account – Automation Practice Site')
        cy.login3('deneme123@test.com','Deneme@12345','Login');
        cy.logout();
    });
    
});