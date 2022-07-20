

describe("my first test suite",() =>

{
    it("my first test", ()=>
    {

        cy.visit("https://www.paypal.com/us/brc/")
       cy.title().should("eq","Paypal")
    })

    
    
})



