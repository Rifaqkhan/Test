import dashboardPage from '../../pages/DashboardPage';
import gamePage from '../../pages/GamePage';
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../pages/HomePage';

const casino = new HomePage();


Given(/^I see search bar on dashboard$/, function () {
    dashboardPage.elements.searchInput().should('be.visible');
});

When(/^I search for the game "([^"]*)"$/, function (searchTerm) {
    dashboardPage.elements.searchInput().clear().type(searchTerm);
    dashboardPage.elements.gamesSelectionTab().should('be.visible');
});

When(/^I see game search results$/, function () {
    dashboardPage.elements.gamesList().should('have.length.greaterThan', 0);
});

When(/^I click on the game$/, function () {
    dashboardPage.elements.gamesList().first().parent().realHover();
    dashboardPage.elements.playButton().click();
});

Then(/^I see the "([^"]*)" game is loaded$/, (gameName) => {
    gameName.split(' ').forEach((word) => {
        gamePage.verifyGameURLLoaded(word.toLowerCase());
    });
    gamePage.elements.gameGrid().should('be.visible');
});

Given(/^I navigate to the dashboard as a "([^"]*)"$/, function (userType) {
    casino.navigate();
    cy.allowCookiesIfNecessary();
    dashboardPage.elements.loginButton().should('be.visible');
    switch (userType.toLowerCase()) {
        case 'guest user': {
            break;
        }
        case 'logged in user': {
            // login as a user
            break;
        }
        default: {
            throw new Error(`User type ${userType} not recognized`);
        }
    }
});