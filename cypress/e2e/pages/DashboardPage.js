class DashboardPage {
    elements = {
        
        loginButton: () => cy.contains('Log in'),  // Navigate to the homepage and handle the initial checks
        searchInput: () => cy.get('input[placeholder="Search"]'), // Verify elements on the homepage // Type the game name in the search field
        gamesSelectionTab: () => cy.get('a:contains("Selection")'), // Ensure the game thumbnail is visible
        gamesList: () => cy.get('div.gtm-grid a[data-af="link"]'), 
        playButton: () => this.elements.gamesList().first().find('button:contains("Play")'),// Search for a specific game (in this case, 'Book of Dead') // Click the game thumbnail
    }
}
module.exports =  new DashboardPage();