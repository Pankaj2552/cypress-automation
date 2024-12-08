describe('Assertion demo', function()
   {
    it('Implicit Assertion', function()
    {
        
        //"should" keywords used in Implicit Assertion

        cy.visit("https://dev-khojocuet.india.benesse.com/login")

       // cy.url().should('include','india')                  //include is keyword used with should
       // cy.url().should('contain','khojocuet')              //contain is keyowrd used with should
       // cy.url().should('eq','https://dev-khojocuet.india.benesse.com/login')

                        //Or we can write like below 

       //cy.url().should('include','india')                  //include is keyword used with should
       // .should('contain','khojocuet')              //contain is keyowrd used with should
       //.should('eq','https://dev-khojocuet.india.benesse.com/login')

                //Or we can use "and" keyword...

       cy.url().should('include','india')                  //include is keyword used with should
       .and('contain','khojocuet')              //contain is keyowrd used with should
       .and('eq','https://dev-khojocuet.india.benesse.com/login')
       .and('not.contain','BenesseIndia')     //negetive assertion testcase
       cy.title().should('include','Login')
       .and('contain','Login')
       .and('eq','Login')
       .and('not.contain','login')   //Negetive testcase

       cy.get('[alt="Benesee logo"]').should('be.visible')
       .and('exist')
       cy.xpath('//a').should('have.length','0')
       cy.get('.text-grey-400').should('exist','Sign in now to start preparing with Benesee')
       cy.get('.mt-12 > :nth-child(1) > .items-center > :nth-child(1)').should('exist', 'Enter Your Benesse ID or Email-ID')
       cy.get('.mt-12 > :nth-child(1) > .items-center > :nth-child(1)').click()
       cy.get('.mt-12 > :nth-child(1) > .items-center > :nth-child(1)').should('exist','For teachers/principals : Use your Benesse ID as shared by the Programme success manager or your email id For students : Use your Benesse ID from the Khojo CUET admit card or your email id')
       cy.get('input[id=":r0:"].py-3').should('exist','Benesse ID or Email ID')
        
  
       
})
   })