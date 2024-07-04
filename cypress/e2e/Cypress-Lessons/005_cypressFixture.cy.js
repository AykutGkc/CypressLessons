///<reference types="cypress"/>

import homepage from "../../support/pageObjects/homepage/homepage";
import credentials from "../../fixtures/credentials.json";
import text from "../../fixtures/text.json";


describe('Cypreess Fixture', () => {
    it('Fixture Örnek kullanim-1', () => {
        cy.on('uncaught:exception',(err,runnable)=>{return false});

        //Ana sayfa erisim ve url basligi dogrulama
        homepage.navigate()
        homepage.verifyUrl(text.url)
        homepage.verifyTitle(text.title)

        cy.fixture("userData").its('data').then(user=>{
            const username=user.username
            const password=user.password

            cy.login3(username,password, text.loginButton)
        })
    });

    it('Fixture Örnek kullanim.2-Pozitif Senaryo', () => {
         cy.navigatePage()
        cy.verifyUrlAndTitle(text.url,text.title)
        cy.login3(credentials.username,credentials.password);
        cy.logout();
    });

    it('Fixture Örnek kullanim.2.1-Negatif Senaryo', () => {
        cy.navigatePage()
       cy.verifyUrlAndTitle(text.url,text.title)
       cy.login3(credentials.fakePassword,credentials.fakePassword);
       cy.logout();
   });

    it('Fixture Örnek kullanim-3', () => {
        cy.navigatePage()
        cy.verifyUrlAndTitle(text.url,text.title)
        cy.fixture("credentials").as('kullaniciVerileri')
        cy.get('@kullaniciVerileri').then((data)=>{
            cy.login3(data.username,data.password,text.loginButton);
        })
        
        cy.logout();
    });

    it('Fixture Örnek kullanim.4', () => {
        cy.navigatePage()
       cy.verifyUrlAndTitle(text.url,text.title)
       cy.login2();
       cy.logout();
   });
    it('Fixture örnek kullanim 5', () => {
        cy.fixture("veri/bilgiler").then((values)=>{
            const degerKarsilastirma=values[0].data2
            cy.degerleriDogrula(degerKarsilastirma.id)
        })
    });

    //Dosya ekleme
    it('Fixture örnek kullanim-6', () => {
        cy.fixture("media/beispiel.png")
        .then((Cypress.Blob.base64StringToBlob))
        .then((fileContent)=>{
            cy.get('yüklenecek yerin locatei eklenir').attachFile()
        })
    });

    //Dosya ekleme-Kellanim bu. Eger sorun olursa bir üstteki denenmeli
    it('Fixture örnek kullanim-7', () => {
    cy.get("Locater alindi").attachFile({filePath:'media/beispiel.png'})
    });

});


