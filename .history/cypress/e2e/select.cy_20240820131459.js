describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });
    ("should test the select functionality", () => {
        cy.xpath("//a[normalize-space()='Drop-Down']").click();
        cy.get("#fruits").select("Mango");
        cy.get("#superheros").select("Ghost Rider");
        cy.get("#lang").select("Java");
        cy.get("#country").select("Colombia");
      });
});