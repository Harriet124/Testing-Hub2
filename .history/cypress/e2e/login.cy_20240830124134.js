import login from "../e2e/pageObjects/loginPage.js";
describe ('pom', () => {

    it('LoginTest', () => {

        cy.visit("https://amp.amalitech-dev.net/auth/login")
        
      const ln = new login(); 
      ln.setEmail("nocanam872@hapied.com");
      ln.setPassword("@Password1");
      ln.clickSubmit();
      ln.verifyLogin();
    })
})