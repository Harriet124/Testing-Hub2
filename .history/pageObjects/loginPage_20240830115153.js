class login 

{
   setEmail(email)
   
   {
   cy.get("input[placeholder='Enter registered email'][name='email']").type(email)

   }

   setPassword(password)
   {
    cy.get("input[placeholder='Enter password']");

   }

   clickSubmit()
   {

    cy.xpath("//button[normalize-space()='LOGIN']").click();

   }

   verifyLogin() 
   {

     cy.xpath("//h1[normalize-space()='LetCode with Koushik']").should("have.text", "LetCode with Koushik")

   }

}
export default login

