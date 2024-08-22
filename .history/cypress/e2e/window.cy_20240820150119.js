describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });
    beforeEach("should test the windows functionality" )
    cy.xpath("//a[normalize-space()='Tabs']").click;
    cy.get("#home").click;
    

})