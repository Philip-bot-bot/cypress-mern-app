/// <reference types = "cypress"/>

describe("Deleting an Existing Item/ postive test scenarios", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("I should be able to delete an existing todo item ", () => {
    cy.login("try@yopmail.com", "123456");
    cy.get(".Toastify__toast-body").should("be.visible");
    cy.wait(5000);
    cy.get(':nth-child(2) > .icon-cell > .flexTable-cell--content > #TrashAlt > path').click();
    cy.wait(3000)
    
  });
});




