describe ('pom', () => {

    it('LoginTest', () => {

        cy.visit("https://letcode.in/test")
        cy.get("input[placeholder='Enter registered email'][name='email']").type("mofeye2121@biscoine.com");
        cy.get("input[placeholder='Enter password']").type("@Password1");
        cy.get()
    })
})