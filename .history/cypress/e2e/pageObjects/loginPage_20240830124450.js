class login 

{
   setEmail(email)
   
   {
   cy.get("input[placeholder='Enter your email']").type(email)

   }

   setPassword(password)
   {
    cy.get("input[placeholder='Enter your password']").type(password);

   }

   clickSubmit()
   {

    cy.get("button[type='submit']").click();

   }

   verifyLogin() 
   {

     cy.xpath("//h1[normalize-space()='LetCode with Koushik']").should("have.text", "LetCode with Koushik");

   }

}
export default login;

