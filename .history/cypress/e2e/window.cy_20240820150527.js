describe("Template Spec", () => {
    beforeEach("should test the windows functionality", () => {
        cy.visit('https://letcode.in/test');
        cy.xpath("//a[normalize-space()='Tabs']").click();
        cy.get("#home").click();
    });

    it('passes', () => {
        // Add any additional test steps or assertions here
    });
});
