describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });

    it("should be dragged within the dotted container", () => {
        cy.visit('https://letcode.in/test');
        cy.xpath("//a[normalize-space()='AUI - 1']").click();
        cy.get('#sample-box')
          .should("be.visible")
          .trigger("mousedown", { which: 1, force:true}) 
          .trigger("mousemove", { clientX: 200, clientY: 400 }) 
          .trigger("mouseup", { force: true });
      });
});