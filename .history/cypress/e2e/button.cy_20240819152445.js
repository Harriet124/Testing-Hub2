describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });
    it("should test the button", () => {
        cy.xpath("//a[normalize-space()='Click']").click();
        cy.get("#home").click();
        cy.get(".content > .button").click();
        cy.go("back").go("back");
      });
});