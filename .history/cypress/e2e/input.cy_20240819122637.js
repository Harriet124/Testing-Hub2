describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });

    it("should set up the input fields and validate their state", () => {
        cy.xpath("//a[normalize-space()='Edit']").click();
        cy.get("#fullName").type("Bene Quayson");
        cy.get("#join").type("Hey Bene, Welcome");
        cy.get("#getMe").type("ortonikc");
        cy.get("#clearMe").clear();
        cy.get("#noEdit").should("be.disabled");
        cy.get("#dontwrite").should("have.attr", "readonly");
      });


})