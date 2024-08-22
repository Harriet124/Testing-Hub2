describe("Template Spec", () => {

    it('should load the test page', () => {
        cy.visit('https://letcode.in/test');
    });

    it("should set up the input fields and validate their state", () => {
        cy.xpath("//a[normalize-space()='Edit']").click();
        
        cy.get("#fullName").should("be.visible").type("Bene Quayson");
        cy.get("#join").should("be.visible").type("Hey Bene, Welcome");
        cy.get("#getMe").should("be.visible").type("ortonikc");
        
        cy.get("#clearMe").should("be.visible").clear();
        
        cy.get("#noEdit").should("be.disabled");
        cy.get("#dontwrite").should("have.attr", "readonly");
    });
});
