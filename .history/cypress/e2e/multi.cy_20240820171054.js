describe("Template Spec", () => {
    it("passes", () => {
      cy.visit("https://letcode.in/test");
    });
    it('should test the multi-select functionality', () => {
        cy.visit("https://letcode.in/test");
        cy.xpath("//a[normalize-space()='AUI - 4']").click();
        cy.get("#container").select("//div[4]//h3[1]", "//body//app-root//div[9]", )
    })
});