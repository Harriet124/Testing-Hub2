describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });
    cy.xpath("//a[normalize-space()='Tabs']");
    cy.get

})