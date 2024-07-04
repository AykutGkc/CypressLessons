///<reference types="cypress"/>


describe('Cypress Shadow', () => {
    it('Shadow', () => {
        cy.visit('https://practice.expandtesting.com/shadowdom')
        cy.get('#shadow-host').shadow()
        .find('#my-btn').as('inputAlani')
        .should('be.visible')
        .should('have.css','background-color','rgb(24, 43, 69)')
        .should('have.css','color','rgb(255, 255, 255)')
        .and('have.css','border-width','4px')
        .and('have.css','height','40px')
        .should('have.css','cursor','pointer')
        //Sonrasi deneme input alaninin oldugu varsayildi
        //.type('Deneme').then(()=>{
        //    cy.get('@inputAlani').should('be.visible').and('have.text','Deneme')
        //})

    });
});

describe.only('Cypress Shadow-2', () => {
    it('Shadow-2', () => {
        cy.visit('http://www.uitestingplayground.com/shadowdom')
        cy.get('guid-generator').shadow()
        .find('#editField').should('be.empty').type('Test Shadow')

        cy.get('guid-generator').shadow()
        .find('#buttonGenerate').should('be.visible')
        .find('#buttonCopy').should('be.visible')
    });
});