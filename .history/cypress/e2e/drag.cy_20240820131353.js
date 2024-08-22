describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });

    beforeEach("should be dragged within the dotted container", () => {
        cy.xpath("//a[normalize-space()='AUI - 1']").click();
        cy.get('#sample-box')
          .should("be.visible")
          .trigger("mousedown", { which: 1 }) 
          .trigger("mousemove", { clientX: 200, clientY: 200 }) 
          .trigger("mouseup", { force: true });
      });
});