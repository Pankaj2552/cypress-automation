describe('xpath Locators', function()
{
    it('Finding total product on page', function()
{
    cy.visit("http://www.automationpractice.pl/index.php")
    //cy.xpath("//a[normalize-space()='Best Sellers']").click()
    cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length',6)
})

it('Finding total product on page', function()
{
    cy.visit("http://www.automationpractice.pl/index.php")
    //cy.xpath("//a[normalize-space()='Best Sellers']").click()
    cy.xpath("//ul[@id='blockbestsellers']").xpath("/li").should('have.length',0)
})
})