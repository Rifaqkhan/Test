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
Cypress.Commands.add('allowCookiesIfNecessary', () => {
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
 });
 
 Cypress.Commands.add('waitForPageLoading', () => {
    cy.get('.atomic-pre-loader').should('exist');
    cy.get('.atomic-pre-loader').should('not.exist');
 });
 
 Cypress.Commands.add('getIframeBody', (iframeLocator) => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return (
        cy
            .get(iframeLocator)
            .first()
            .its('0.contentDocument.body')
            .should('not.be.empty')
            // wraps "body" DOM element to allow
            // chaining more Cypress commands, like ".find(...)"
            .then(cy.wrap)
    );
 });