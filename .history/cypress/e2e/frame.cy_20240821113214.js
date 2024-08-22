describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });
    it("should test the frame functionality", () => {
        cy.visit('https://letcode.in/test');
        cy.xpath("//a[normalize-space()='Inner HTML']").click();
        cy.get("input[placeholder='Enter name']").should("be.visible").type("Benedicta Djangmah");
        cy.("input[placeholder='Enter email']").should("be.visible").type("bene@gmail.com");
      });    

});