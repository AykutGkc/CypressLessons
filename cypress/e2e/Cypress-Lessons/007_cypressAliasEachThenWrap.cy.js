///<reference types="cypress"/>

import homepage from "../../support/pageObjects/homepage/homepage";
import login from "../../support/pageObjects/login/login";

describe('Alias-Then-Wrap-Each', () => {

    before(() => {
        cy.log('Tests about Alias,Wrap,Each,Then run')
    });
    beforeEach(() => {
        homepage.navigate()
    });

    afterEach(() => {
        cy.log('Example about Alias,Wrap,Each,Then')
    });
    it('Alias', () => {
        cy.get('#customer_login').as('h2LoginDogrula')

        cy.get('@h2LoginDogrula').should('contain','Login')

        cy.get('@h2LoginDogrula').should('contain','Username')
    });
    it('Then', () => {
        cy.get('#customer_login').as('h2LoginDogrula').then(() => {
            cy.get('@h2LoginDogrula').should('contain','Login')
            cy.get('@h2LoginDogrula').should('contain','Username')
            login.fillUsername('deneme123@test.com')
            login.fillPassword('Deneme@12345')
            login.loginBtn('Login')
        }).then(()=>{
            cy.wait(2000)
            cy.logout()
        })
    });
    it.only('Wrap and Each', () => {
        cy.get('input[type="email"]').each((el)=>{
            cy.log(el)
            cy.wrap(el).type('Test')
        }).then(()=>{
            cy.get('Locate to write').should('contain','any Word of locate')
        })
        cy.get('input[type="submit"]').as('button').each((el2=>{
            cy.log(el2)
            
        }))

    });
});