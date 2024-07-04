///<reference types="cypress"/>

describe("Cypress API", () => {
  it("Cypress GET", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id',1);
      }
    );
  });

  it('Cypress GET-2', () => {
    cy.request({
        method:'GET',
        url:'https://jsonplaceholder.typicode.com/posts/1',
        body:{
            userId:2,
        }
    }).then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id',1);
    })
  });

  it('Cypress POST', () => {
    cy.request('POST','https://jsonplaceholder.typicode.com/posts',{
        title:'foo',
        body:'bar',
        userId:1
    }).then((response)=>{
        expect(response.status).to.eq(201);
        except(response.body).to.have.property('title','foo')
    })
  });

  it('Cypress POST-2', () => {
    cy.request({
        method:'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body:{
            title:'foo',
            body:'bar',
            userId:1
        }
    }).then((response)=>{
        expect(response.status).to.eq(201);
        except(response.body).to.have.property('title','foo')
    })
  });

  it('Cypress PUT', () => {
    cy.request('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id:1,
        title:'title updated',
        body:'body updated',
        userId:1
    }).then((response)=>{
        expect(response.status).to.eq(201);
        except(response.body).to.have.property('title','title updated')
  })
});

it('Cypress DELETE', () => {
    cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
        expect(response.status).to.eq(200);
    })
});

});

describe('Cypress JWT API', () => {
    it('JWT ile yetkilendirme', () => {
        //JWT(Json Web Token)
        cy.request({
            method:'POST',
            url:"https://example.com/auth/login",
            body:{
                username:'username@example.com',
                password:"password123"
            }
        }).then((response)=>{
            except(response.status).to.eq(200)

            //JWT yanit gövdesinden alinacak
            const token=response.body.token

            //Token'in varligini kontrol ediyoruz.
            except(token).to.not.be.empty

            //JWT ile korumali kaynaga erisim icin GET istegi gönderecegiz
            cy.request({
                method:'GET',
                url:"https://example.com/api/protected/resorce/example",
                headers:{
                    'Authorization': 'Bearer ${token}'
                }
            }).then((resp)=>{
                except(resp.status).to.eq(200)
                except(resp.body).to.have.property('data') //yanit bodysini kontrol etmek
            })
        })
    });
});
