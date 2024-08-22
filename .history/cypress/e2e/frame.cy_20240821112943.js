describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });
    it("should test the frame functionality", () => {
        cy.visit('https://letcode.in/test');
        cy.xpath("//a[normalize-space()='Inner HTML']").click();
        cy.get("input[placeholder='Enter name']']").should("bevisible").type("Benedicta Djangmah");
        cy.xpath("input[placeholder='Enter email']").should("bevisible").type("bene@gmail.com");
      });    

});