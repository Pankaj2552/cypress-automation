describe('Cypress Alerts windos', function()
{
    //JavaScript Alert: It will have some text and an Ok button.
  
    /*
    it('JavaScript Alert', function()
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.get("button[onclick='jsAlert()']").should('have.text','I am a JS Alert')
        
      //For reading message on window we need to use simple event function (window:alert)
      //test code by Pankaj Saini
        cy.on('window:alert',function(t)
    {
        expect(t).to.contains('I am a JS Alert');
      
        //Cypress automatically closingin the alert window
        cy.get("#result").should('have.text','You successfully clicked an alert')
})
        */
    
/*
 //JavaScript Confirmation Alert: It will have some text, Cancel and an Ok button.

 it('JavaScript Confirm Alert', function()
 {
     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
     cy.get("button[onclick='jsConfirm()']").click()
     
   //For reading message on window we need to use simple event function (window:alert)

     cy.on('window:confirm',function(t){
     expect(t).to.contains('I am a JS Confirm');
     
    })

    cy.get("#result").should('have.text','You clicked: Ok')

})
    */
    
//JavaScript Prompt Alert: It will have some text, textbox and and an Ok button.

/*
it('JavaScript Prompt Alert', function()
{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((win) => 
        {
    cy.stub(win,'prompt'), returns('welcome');
    
})
    cy.get("button[onclick='jsPrompt()']").click();
    //This is the method we created before opening the alert window.
    cy.get("#result").should('have.text',"You entered: welcome");
})
    
*/

/*
it('Authenticate Alert', function()
{
//cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth:
                                                                 {
                                                                 username: "admin",
                                                                 password: "admin"
                                                                  }
                                                                })
//cy.get("div[class='example'] p") .should('have.contain',"Congratulations");

                                                            })

                                                            */
it('Authenticate Alert', function()
{
cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
cy.get("div[class='example'] p") .should('have.contain',"Congratulations");


})

})