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

     cy.xpath(".nav-item.active-nav']").should("have.text", "");

   }

}
export default login;

