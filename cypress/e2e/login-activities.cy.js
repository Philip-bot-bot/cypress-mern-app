/// <reference types = "cypress"/>

describe("Login activities/ postive test scenarios", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("I should be able to login with valid credentials", () => {
    cy.login("try@yopmail.com", "123456");
    cy.get(".Toastify__toast-body").should("be.visible");
  });

  it("I should be able to login with uppercase email", () => {
    cy.login("TRY@YOPMAIL.COM", "123456");
    cy.get(".Toastify__toast-body").should("be.visible");
  });

});

describe("Login activities/ negative test scenarios", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("I shouldn't be able to login with invalid email", () => {
    cy.login("cypress@yopmail.com", "123456");
    cy.get(".Toastify__toast-body").should("be.visible");
  });

  it("I shouldn't be able to login with invalid password", () => {
    cy.login("TRY@YOPMAIL.COM", "1256");
    cy.get(".Toastify__toast-body").should("be.visible");
  });
  it("I shouldn't be able to login with unregistered email", () => {
    cy.login("mern@yopmail.com", "123456");
    cy.get(".Toastify__toast-body").should("be.visible");
  });
  it("I shouldn't be able to login with missing email", () => {
    cy.get('a.btn.btn-light.m-2').click();
    cy.get("#login-email")
    cy.get("#login-password").type("123456"); 
    cy.get('#user-login-button').click();
    cy.get(".Toastify__toast-body").should("be.visible");
  });
  it("I shouldn't be able to login with missing password", () => {
    cy.get('a.btn.btn-light.m-2').click();
    cy.get("#login-email").type("try@yopmail.com");
    cy.get("#login-password")
    cy.get('#user-login-button').click();
    cy.get(".Toastify__toast-body").should("be.visible");
    
  });
    it("I shouldn't be able to login with empty email and password fields", () => {
        cy.get('a.btn.btn-light.m-2').click();
    cy.get("#login-email")
    cy.get("#login-password")
    cy.get('#user-login-button').click();
    cy.get(".Toastify__toast-body").should("be.visible");
  });
    it("I shouldn't be able to login with invalid email format", () => {
    cy.login("TRY@YOPMAIL.CM", "123456");
    cy.get('.Toastify__toast-body').should("be.visible");
  });
});
