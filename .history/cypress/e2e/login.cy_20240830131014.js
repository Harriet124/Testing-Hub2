import login from "../e2e/pageObjects/loginPage.js";
describe ('pom', () => {

    it('LoginTest', () => {

        cy.visit("https://amp.amalitech-dev.net/auth/login")

        cy.fixture ("Agrimap").then((data)=>{
         
          const ln = new login(); 
      ln.setEmail("data.email");
      ln.setPassword("data.password");
      ln.clickSubmit();
      ln.verifyLogin();


        })
        
      
    })
})