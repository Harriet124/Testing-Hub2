describe("Template Spec", () => {
    beforeEach(() => {
      cy.visit('https://letcode.in/test');
    });
  
    it("should test the drag and drop functionality", () => {
      cy.xpath("//a[normalize-space()='AUI - 2']").click();
      const dataTransfer = new DataTransfer();
  
      cy.get("#draggable").trigger("dragstart", {
        dataTransfer
      });
  
      cy.get("#droppable").trigger("drop", {
        dataTransfer
      });
  
      
    });
  });
  