import homepage from "../../support/pageObjects/homepage/homepage";
import login from "../../support/pageObjects/login/login";

describe('Page Object kullanimina örnek', ()=>{
    it('Login testi-Zincirleme yazimi', () => {
        cy.on('uncaught:exception',(err,runnable)=>{return false});
        homepage.navigate()
        homepage.verifyUrl('automationtesting')
        homepage.verifyTitle('My Account – Automation Practice Site')

        // Page object login dosyasinde return kullanildiginda zincirleme seklinde yazilabilir.
        //Örnek
        login.fillUsername('Test')
             .fillPassword('12345')
             .loginBtn('Login')

        //Eger zincirleme mantiginda yazmak istemiyorsaniz.
        //Örnek

    });

    it.only('Login testi-Zincirmeleme olmadan yazim', () => {
        cy.on('uncaught:exception',(err,runnable)=>{return false});
        homepage.navigate()
        homepage.verifyUrl('automationtesting')
        homepage.verifyTitle('My Account – Automation Practice Site')

         //Eger zincirleme mantiginda yazmak istemiyorsaniz.
        //Örnek
        login.fillUsername('Test')
        login.fillPassword('12345')
        login.loginBtn('Login')

        login.errorMessage('Test')

       
             
    });
})


