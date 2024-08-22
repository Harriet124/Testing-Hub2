describe("Template Spec", () =>{
    it('passes' , () => {
        cy.visit('https://letcode.in/test');
    });

    it("should test the elements functionality", () => {
        cy.xpath("//a[normalize-space()='Find Elements']").click();
        cy.get("input[placeholder='Enter your git user name eg., ortonikc']").type("harry124");
        cy.get("#search").click();
      });
});