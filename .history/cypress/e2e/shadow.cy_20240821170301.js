const { beforeEach } = require("mocha")

describe("Template spec", () => {

   beforeEach(() => {
    cy.visit('https://letcode.in/test');
   });
it("should test the shadow DOM functionality", () => {
    cy.xpath("//a[normalize-space()='DOM']").click();
    cy.get("#fname").type("Estella");

})

})