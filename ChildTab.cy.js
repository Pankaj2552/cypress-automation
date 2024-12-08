describe("Handle Target Tab",function()
{
    it("Approch1",function()
{
cy.visit("https://the-internet.herokuapp.com/windows")

//Removing Target Window and open Target window on the same tab
//cy.get('.example>a').invoke('removeAttr','target').click();

cy.request('GET', 'https://api.example.com/data')
  .its('status')
  .should('eq', 200);




})
})