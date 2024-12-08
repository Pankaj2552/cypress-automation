describe ('Login Tests', function() {
    
    it("Open Navigator", function()
{   
    cy.visit("https://dev-khojocuet.india.benesse.com/login") //Open Navigator
    
    cy.get('input[id=":r0:"]').type("1124055025")        //Enter Username        
    cy.get("button[type='submit']").click()              //Hit Continue button                  
    cy.get("label.inline-block").contains("Enter your password")  //Assertion-check that is password page 
    cy.get("input.outline-none").type("admin@123")       //Enter Password 
    cy.get("img[alt='eye icon']").click()              //Click on Eye icon        
    //cy.get("input.outline-none").contains("admin@123")   //Assertion for check valid password  
    //Cypress.config('pageLoadTimeout', 60000); // 60 seconds      
    cy.get("button[type='submit']").click()            //Hit Continue button
    //cy.get("div[class='flex justify-between items-center pt-3 pb-2'] div[class="relative w-[42px] h-6 bg-dark-grey rounded-full peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-grey-400 after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:bg-blue-600"]").click()
    //cy.get("div[class='flex justify-between items-center pb-11'] div[class="relative w-[42px] h-6 bg-dark-grey rounded-full peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-grey-400 after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:bg-blue-600"]").click()
    cy.get("button.ml-auto").click
    cy.xpath("//p[@class='text-2xl text-").contains("Welcome, Ishita Nigam!")
      

       
})
})