describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });
    it("should test the frame functionality", () => {
        cy.visit('https://letcode.in/test');
        cy.xpath("//a[normalize-space()='Inner HTML']").click();
        cy.xpath("//iframe[@id='firstFr']").should("be")type("Benedicta Djangmah");
        cy.xpath("//iframe[@id='firstFr']").type("bene@gmail.com");
      });    

});