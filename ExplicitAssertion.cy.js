describe('Assertion demo', function()
   {
   it('Explicit Assertion', function()
    {
        cy.visit("https://dev-khojocuet.india.benesse.com/login")
        cy.get("input[id=':r0:']").type('pkpankajsaini@gmail.com')
        cy.get("button[type='submit']").click()
        cy.xpath("//input[@id=':r1:']").type('admin@123') 
        cy.get("button[type='submit']").click()

        let expName="Pankaj Saini"
        cy.get("span[class='hidden md:inline font-medium text-sm text-primary-black']").then( function(x){
           let actName=x.text()

           //BDD Style
           expect(expName).to.equal(actName)
           expect(expName).to.not.equal(actName)

           //TDD Style

           Assert.equal(expName.actName)
           Assert.notEqual(expName.actName)

        
        }) 
    })
})