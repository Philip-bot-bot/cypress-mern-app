/// <reference types = "cypress"/>
import { faker } from "@faker-js/faker";
describe("Creating a New Item (Todo/User)/ postive test scenarios", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("I should be able to add a todo", () => {
    const randomTodo = faker.hacker.phrase();
    cy.login("try@yopmail.com", "123456");
    cy.get(".Toastify__toast-body").should("be.visible");
    cy.get("#user-register-button").click();
    cy.get("#todo-text").type(randomTodo);
    cy.get("#todo-tag-Add").select("Personal");
    cy.get("#todo-update-add-button-Add").should("be.visible").click();
    cy.wait(3000);
    cy.get(".Toastify__toast-body").should("be.visible");
    cy.get(':nth-child(2) > .text-cell > .flexTable-cell--content').should("be.visible");
  });
});

describe("Creating a New Item (Todo/User)/negative test scenarios", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("I shouldn't be able to add a todo without adding a tag", () => {
    const randomTodo = faker.hacker.phrase();
    cy.login("try@yopmail.com", "123456");
    cy.get(".Toastify__toast-body").should("be.visible");
    cy.get("#user-register-button").click();
    cy.get("#todo-text").type(randomTodo);
    cy.get("#todo-update-add-button-Add").should("be.visible").click();
    cy.wait(3000);
    
  });
  it("I shouldn't be able to add a todo without adding a description", () => {
    cy.login("try@yopmail.com", "123456");
    cy.get(".Toastify__toast-body").should("be.visible");
    cy.get("#user-register-button").click();
    cy.get("#todo-tag-Add").select("Personal");
    cy.get("#todo-update-add-button-Add").should("be.visible").click();
    cy.wait(3000);
  
  });
});
