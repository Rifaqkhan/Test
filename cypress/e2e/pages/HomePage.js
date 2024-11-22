class HomePage {

   
    // Navigate to the homepage and handle the initial checks
    navigate() {
        cy.visit('/'); // Visit the homepage
        this.verifyHomepageElements(); // Verify elements on the homepage
        this.acceptCookies(); // Accept cookies if the consent dialog appears
        return this; // Return this for fluent chaining
    }

    // Verify essential elements are visible on the homepage
    verifyHomepageElements() {
        cy.get('[alt="Desktop Logo"]').should('be.visible'); // Logo visibility check
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelectionWrapper').should('be.visible'); // Cookie consent dialog check
    }

    // Accept cookies if the consent dialog is displayed
    acceptCookies() {
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
            .should('have.class', 'CybotCookiebotDialogBodyButton') // Check if button has correct class
            .click(); // Click the button to accept cookies
    }
}

export default HomePage;
