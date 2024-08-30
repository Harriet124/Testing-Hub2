import login from "../e2e/pageObjects/loginPage.js";
describe ('pom', () => {

    it('LoginTest', () => {

        cy.visit("https://amp.amalitech-dev.net/auth/login")

        cy.fixture ("Agrimap").then((data)=>{
         
          const ln = new login(); 
      ln.setEmail("data.");
      ln.setPassword("Kw@m3.Jak1");
      ln.clickSubmit();
      ln.verifyLogin();


        })
        
      
    })
})