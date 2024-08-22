describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });

    it("should test the alert functionality", () => {
        cy.xpath("//a[normalize-space()='Dialog']").click();
        cy.get("#accept").click();
        cy.get("#confirm").click();
        cy.window().then((win) => {
          cy.stub(win, "prompt").returns("Chris");
        });
        cy.get("#prompt").click();
        cy.get(".notification.is-info").should("have.text", "Your name is: Chris");
        cy.get("#modern").click();
      });
    
});