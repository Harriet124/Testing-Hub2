describe ('pom', () => {

    it('LoginTest', () => {

        cy.visit("https://letcode.in/")
        
        cy.xpath("//input[@name='email']").type("mofeye2121@biscoine.com");
        cy.get("input[placeholder='Enter password']").type("@Password1");
        cy.xpath("//button[normalize-space()='LOGIN']").click();
    })
})