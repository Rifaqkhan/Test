class GamePage {
    // Click on the game thumbnail and verify that the URL is correct the correct game has been played
    elements = {
        gameGrid: () => cy.getIframeBody('#ax-game-iframe').find('#game-grid'),
    }

    verifyGameURLLoaded(url) {
        cy.url().should('contain', url);
    }
}
module.exports = new GamePage();