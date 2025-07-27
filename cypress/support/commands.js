// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('login', (email, password) => {
   
    cy.get('a.btn.btn-light.m-2').click();
    cy.get("#login-email").type(email);
    cy.get("#login-password").type(password); 
    cy.get('#user-login-button').click();
    cy.wait(2000);
  
});

// cypress/support/commands.js
const COMMAND_DELAY = 3000;  

// Delay specific commands
const commandsToDelay = [
  'click', 'type', 'check', 'select'
];

commandsToDelay.forEach((command) => {
  Cypress.Commands.overwrite(command, (originalFn, ...args) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        originalFn(...args).then(resolve);
      }, COMMAND_DELAY);
    });
  });
});