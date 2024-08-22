describe("Template Spec", () => {
  beforeEach(() => {
    cy.visit('https://letcode.in/test');
  });

  it("should test the drag and drop functionality", () => {
      // Navigate to the drag-and-drop section
      cy.xpath("//a[normalize-space()='AUI - 2']").click();
      
      cy.get("#draggable").should("be.visible");
      
      const dataTransfer = new DataTransfer();

      cy.get("#draggable")
          .trigger("mousedown", { which: 1 })
          .trigger("dragstart", { dataTransfer })
          .trigger("mousemove", { clientX: 100, clientY: 100 });

      cy.get("#droppable")
          .trigger("mousemove", { clientX: 100, clientY: 100 })
          .trigger("drop", { dataTransfer })
          .trigger("mouseup", { force: true });

       
      cy.get("#droppable").should("have.class", "ui-state-highlight"); 
  });
});
