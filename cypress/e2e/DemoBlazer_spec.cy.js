/// <reference types='cypress' />const { generateUser } = require("../support/commands.js");
describe('DemoBlazer', () => {
  before(() => {
  });

  it('Sholud sign up, log a user and add product to the cart', () => {
    cy.visit('https://www.demoblaze.com/');
    // Registration of user
    cy.registration();
    // Log in
    cy.login();
    // Adding sumsung into the cart
    cy.contains('a', 'Samsung galaxy s6').click( {force: true});
    cy.get('.col-sm-12 > .btn').click({force: true});
    cy.wait(2000);
    // Checking if the samsung added to the cart
    cy.contains('a', 'Cart').click( {force: true});
    cy.wait(2000);
    cy.contains('td', 'Samsung galaxy s6').should('exist');
  })
})