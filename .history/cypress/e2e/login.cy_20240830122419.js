import login from "../e2e/pageObjects/loginPage.js";
describe ('pom', () => {

    it('LoginTest', () => {

        cy.visit("https://letcode.in/signin")
        
      const ln = new login(); 
      ln.setEmail("") 
    })
})