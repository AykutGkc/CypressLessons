import homepage from "../../pageObjects/homepage/homepage"

Cypress.Commands.add('navigatePage',()=>{
    cy.on('uncaught:exception',(err,runnable)=>{return false});

    homepage.navigate()
})

Cypress.Commands.add('verifyUrlAndTitle',(url,title)=>{
    homepage.verifyUrl(url)
    homepage.verifyTitle(title)

})