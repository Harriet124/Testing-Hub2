describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });

    it("should test the radio functionality", () => {
        cy.visit('https://letcode.in/test');
        cy.xpath("//a[normalize-space()='Toggle']").click(); 
        cy.get('#yes').check();
        cy.get('#yes').should("be.checked");
        cy.get('#one').check();
        cy.get('#one').should("be.checked");
        cy.get('#bug').check();
        cy.get('#bug').should("be.checked");
        cy.get('#maybe').should("be.disabled");
        cy.xpath("//div[7]//label[2]//input[1]").check();
        cy.xpath("//div[7]//label[2]//input[1]").should("be.checked");
      });
});