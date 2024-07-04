///<reference types="cypress"/>
//Temel komutlar icin öneriler ve nasil kullanildigini gösterir.

//.skip yazilirsa o block atlanir,teste dahil edilmez,
describe.skip('Temel Komutlar',()=>{
    it('cy.visit,cy.url(),cy.go()', ()=>{   
        //cy.visit() kullanimi
        cy.visit('/') //baseUrl Atandi ise sadece bu sekilde kullanilabilir
        cy.visit('https://www.google.com/') //Baseurl atanmadi ise bu sekilde kullanilir
        cy.visit({
            url:'/example/pages1/example.html',
            method:'GET' 
        })//baseUrl atandi ise url kismina /sonraso link yazilir.methoda göre islemler yaptirilir.

        cy.visit('/')
        //Burada bazi islemler yapildi.
        cy.visit('https://www.exame.com') //Daha sonra bu siteye gidildi
        //Burada bazi test asamalri yapilabilir. NOT:Saglikli calismayabilir. Tavsiye edilmez. 
        //Dogru kullanim it() blogu icinde tek cy.visit() kullanimidir.

        //cy.url() kullanimi
        cy.visit('https://www.example.com')
        
        //cy.url() kullanimi
        cy.url().should('eq','https://www.example.com') //Tam esetlik söz konusu 'eq' icin
        cy.url().should('include','https://www.example.com') //icerip icermedigine bakilir'include' icin
        
        //cy.go() kullanimi
        cy.go('back')
        cy.go(-1)

        cy.go('forward')
        cy.go(1)

    })
    it('cy.get,cy.contains, .find', ()=>{
        //cy.get() kullanimi
        cy.get('.classAdi')
        cy.get('#id')
        cy.get('dev>li>ul')
        cy.get('[data-id="testId]')
        cy.get('div.classAdi #id')

        cy.get('.classAdi').as('prices')
        cy.get('@prices')
        //cy.get() icine sadece xPath kullanilmaz.

        //cy.contains kullanimi
        cy.contains('Login') //'Login' birden fazla ise ilkine tiklar
        cy.get('#testId').contains('Login').click();

        cy.get('.nav li h1').click();
        cy.get('.nav').contains('About').click()

        //.find kullanimi
        cy.get('#parent').find('li').find('.first');
        cy.get('#parent li .first')



    })
    it('.click,.type.clear',()=>{
        //.click kullanimi
        cy.click()//yanlis kullanim hata verir

        cy.get('submitBtn').click();
        cy.contains('Submit').click();
        cy.get('img').click('topRight');
        cy.get('img').click(15,40);
        cy.get('#inputUsername').click();

        //.type kullanimi -> Bir input alanina  metin girmek icin kullanilir
        cy.get('#inputName').type('testUser');
        cy.get('#password').type('abc123{enter}'); //{enter} ile enter tusuna basar
        cy.get('testClass').type('{enter}');

        cy.get('#comments').type('z.B 250 den fazla cümle yazildi',{delay:0}) //{delay.0} ile metin hizlica gönderilir

        //.clear() kullanimi
        cy.get('.nac').clear(); //temizleyecek bir sey olmadigi icin hata alinir
        
        cy.get('#inputName').type('TestUser1');
        cy.get('#inputName').clear()
        cy.get('#inputName').type('TestUser2');
        cy.get('#inputName').clear()
        cy.get('#comments').type('z.B 250 den fazla cümle yazildi',{delay:0}) //{delay.0} ile metin
        //assertion yapildi
        cy.get('#inputName').clear()

    })
    it('.should', () => {
        //.should kullanimi
        
        cy.get('#submitBtn').should('be.visible').and('include','Giris')
        //Birincisi #submitBtn dogrulanmasi ve ardindan butonun isminin giris oldugunun dogrulanmasi
        //Kelimenin icermesi yeterli 

        cy.get('#submitBtn').should('be.visible').and('eq','Giris')
        //Birincisi #submitBtn dogrulanmasi ve ardindan butonun isminin giris kelimesini dogrulanmasi
        //eq de %100 esitlik olmali

        cy.get('#submitBtn').should('be.visible').and('contain','Giris')
        //Birincisi #submitBtn dogrulanmasi ve ardindan butonun isminin giris kelimesini dogrulanmasi
        //Kelimenin icermesi yeterli, contains de ayidir.
        
        cy.get('input').should('be.empty')
        cy.get('input').should('not.have.value', 'Jane')

        cy.contains('Login').should('be.visible')
        cy.get('header').should('have.css','font-family').and('match','/serif/');

        cy.get('.class').should('not.be.empty');

        cy.get('#testID').should('have.length',3);


    });

    it('cy.wait', () => {
        //cy.wait kullanimi

        cy.visit('/');
        cy.wait(10000); //her türlü 10 sn bekler
        cy.get('.list>li',{timeout:10000}).should('be.visible').click(); //sayfa yüklenene kadar max 10 sn bekler
        cy.get('#id').should('be.visible');
    });

    it('Önemli bazi komutlar', () => {
        //cy.title() kullanimi
        cy.title().should('eq','sayfanin basligi')
        cy.title().should('include','sayfanin baslig')

        //cy.log() kullanimi
        cy.visit('/')
        cy.log('Sayfaya yönlendirildi')
        cy.get('.nav').find('li').contains('About').click();
        cy.log('About acildi')

        //cy.screenshot kullanimi
        cy.screenshoot()
        cy.get('.post').screenshot()
        cy.screenshot('.../login/bsarililogin/')

        //cy.viewport() kullanimi
        cy.viewport(100,1000);
        cy.viewport(500,700)
        cy.viewport('iphone-6');




    });



})

describe('Temel Komutlar Örnek test', ()=>{
   it('Örnek uygulama', () => {
    cy.viewport(1500,1500)
    cy.visit('https://demoqa.com/')
   cy.url().should('eq','https://demoqa.com/')
   cy.log('url Dogrulandi')
   cy.title().should('eq','DEMOQA')
   cy.log('title Dogrulandi')
   //cy.get('.card.mt-4.top-card').find('h5').contains('Elements').click(); //Yöntem1
   cy.get('.card.mt-4.top-card .card-body h5').contains('Elements').click(); //Yöntem2
   //cy.contains('Elements').click();//Yöntem3
   cy.go(-1)
   cy.log('Bir önceki sayfaya gidildi')
   cy.go(1)
   cy.log('Bir sonraki sayfaya gidildi')
   cy.wait(1000)
   cy.get('.accordion').should('be.visible')
   cy.screenshot();
   });
})