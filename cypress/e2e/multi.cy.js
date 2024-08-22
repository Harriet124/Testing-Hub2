describe("Template Spec", () => {
    it("passes", () => {
      cy.visit("https://letcode.in/test");
    });
    it('should test the multi-select functionality', () => {
        cy.visit("https://letcode.in/test");
        cy.xpath("//a[normalize-space()='AUI - 4']").click();
        cy.xpath("//body//app-root//div[7]").click({ ctrlKey: true });
        cy.xpath("//body//app-root//div[6]").click({ ctrlKey: true });
    })
});