import login from "../../pageObjects/login/login"
import credentials from "../../../fixtures/credentials.json"
import text from "../../../fixtures/text.json"


//Custom Comands Kullanimi-POM ile
Cypress.Commands.add('login', ()=>{
    login.fillUsername('Test')
    login.fillPassword('12345')
    login.loginBtn('Login')
})

//Custom Comands Kullanimi-POM olmadan
Cypress.Commands.add('login2', ()=>{
    cy.get('input#username').should('be.empty').and('be.visible').type(credentials.username, {log:false})
    cy.get('input#password').should('be.empty').and('be.visible').should('be.visible').type(credentials.password)
    cy.get('input[name="login"]').should('be.visible').and('have.value',text.loginButton).click()
})

//Custom Comands parametre kullanimi

Cypress.Commands.add('login3',(username,password,text)=>{
    login.fillUsername(username)
    login.fillPassword(password)
    login.loginBtn(text)
})
