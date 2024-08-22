describe("Template Spec", () => {

    // Load the test page before each test
    beforeEach(() => {
        cy.visit('https://letcode.in/test');
    });

    // Test the input fields and their validation
    it("should set up the input fields and validate their state", () => {
        cy.xpath("//a[normalize-space()='Edit']").click();

        // Check visibility and then interact with the input fields
        cy.get("#fullName").should("be.visible").type("Bene Quayson");
        cy.get("#join").should("be.visible").type("Hey Bene, Welcome");
        cy.get("#getMe").should("be.visible").type("ortonikc");

        // Clear the field and check other attributes
        cy.get("#clearMe").should("be.visible").clear();
        cy.get("#noEdit").should("be.disabled");
        cy.get("#dontwrite").should("have.attr", "readonly");
    });
});
