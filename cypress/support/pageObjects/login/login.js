class Login{
    fillUsername(username){
        cy.get('input#username').should('be.empty').and('be.visible').type(username,{log:false})

        return this;
    }

    fillPassword(password){
        cy.get('input#password').should('be.empty').and('be.visible').should('be.visible').type(password,{log:false})

        return this;
    }
    loginBtn(value){
        cy.get('input[name="login"]').should('be.visible').and('have.value',value).click()
        return this;

    }

    errorMessage(error){
        cy.get('.woocommerce-error').should('be.visible').and('contain',error)
        return this;
    }

}

export default new Login;