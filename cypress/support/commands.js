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
const num = Math.random().toString().slice(2,4);
    const username = `my_user_${num}` 
    const password = 'Password';
Cypress.Commands.add('registration', () => {
    cy.get('a[data-target="#signInModal"]').click();
    cy.wait(2000);
    cy.get('input[id = "sign-username"]').type(username);
    cy.wait(2000);
    cy.get('input[id = "sign-password"]').type(password);
    cy.wait(2000);
    cy.contains('button', 'Sign up').click();
    cy.wait(2000);
  });
  Cypress.Commands.add('login', () => {
    cy.contains('a', 'Log in').click( {force: true});
    cy.wait(2000);
    cy.get('input[id = "loginusername"]').type(username);
    cy.wait(2000);
    cy.get('input[id = "loginpassword"]').type(password);
    cy.wait(2000);
    cy.get('button[onclick="logIn()"]').click({force: true});
    cy.wait(2000);
    cy.on('window:confirm', () => true);
  })
  