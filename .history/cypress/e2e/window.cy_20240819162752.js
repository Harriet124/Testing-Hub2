describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });
    cy.xpath("//a[normalize-space()='Tabs']").click;
    cy.get("#home").click;
    

})