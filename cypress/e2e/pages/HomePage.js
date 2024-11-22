class HomePage {

    // Get the search field element
    searchField() {
        return cy.get('[data-cy="filter_search"]').should('be.visible');
    }

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

    // Search for a specific game (in this case, 'Book of Dead')
    searchForGame(gameName = 'book of dead') {
        this.searchField()
            .clear() // Clear any previous search text
            .type(gameName); // Type the game name in the search field
        cy.wait(1500); // Wait for search results to load (ideally should be replaced with a more reliable wait condition)
        return this; // Return this for fluent chaining
    }

    // Click on the game thumbnail and verify that the URL is correct
    clickOnTheGame() {
        cy.get('[alt="BookofDeadThumbnail"]').should('be.visible'); // Ensure the game thumbnail is visible
        cy.get('.sc-dwLEzm').click(); // Click the game thumbnail
        cy.url().should('eq', 'https://www.boostcasino.com/slots/book-of-dead'); // Verify the URL after clicking
        return this; // Return this for fluent chaining
    }
}

export default HomePage;
