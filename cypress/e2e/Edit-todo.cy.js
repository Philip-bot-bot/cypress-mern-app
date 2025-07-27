/// <reference types = "cypress"/>
import { faker } from "@faker-js/faker";
describe("Editing an Existing Item/ postive test scenarios", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("I should be able to edit an existing todo item ", () => {
    const randomTodo = faker.hacker.phrase();
    cy.login("try@yopmail.com", "123456");
    cy.get(".Toastify__toast-body").should("be.visible");
    cy.wait(5000);
    cy.get(':nth-child(2) > .icon-cell > .flexTable-cell--content > #Edit > path').click();
    cy.get("#todo-text").clear().type(randomTodo);
    cy.get("#todo-tag-Update").select("Work");
    cy.get("#todo-update-add-button-Update").should("be.visible").click();
    cy.wait(3000);
    cy.get(".Toastify__toast-body").should("be.visible");
    cy.get(':nth-child(2) > .text-cell > .flexTable-cell--content').should("be.visible");
  });
});

describe("Editing an Existing Item/ postive test scenarios", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("I shouldn't be able to edit an existing todo if the todo is empty", () => {
    cy.login("try@yopmail.com", "123456");
    cy.get(".Toastify__toast-body").should("be.visible");
    cy.wait(5000);
    cy.get(':nth-child(2) > .icon-cell > .flexTable-cell--content > #Edit > path').click();
    cy.get("#todo-text").clear();
    cy.get("#todo-tag-Update").select("Work");
    cy.get("#todo-update-add-button-Update").should("be.visible").click();
    cy.wait(3000);
   
  });

});
