import login from "../e2e/pageObjects/loginPage.js";
describe ('pom', () => {

    it('LoginTest', () => {

        cy.visit("https://amp.amalitech-dev.net/auth/login")

        cy.fixture ("Agrimap").then((data)=>{
         
          const ln = new login(); 
      ln.setEmail(Agrimap.email);
      ln.setPassword("Agrimap.password");
      ln.clickSubmit();
      ln.verifyLogin();


        })
        
      
    })
})