describe ('My First Test',() =>
{
it ('Verify Title name -Possitive', () => {
    cy.visit("https://dev-khojocuet.india.benesse.com/login")
    cy.title().should('eq','Login')
    })
it('Verify Title Name -Negetive', function()
{
  cy.visit("https://dev-khojocuet.india.benesse.com/login")
    cy.title().should('noteq','Login')
})


 })
    


 }