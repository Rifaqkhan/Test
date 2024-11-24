import HomePage from "../../pages/HomePage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const casino = new HomePage();

import LanguagePage from "../../pages/LanguagePage"; 

const languagePage = new LanguagePage();

Given('I am on the homepage', () => {
    casino.navigate();
});

When('I select {string} from the language dropdown', (languageCode) => {
    const languageUrls = {
        FI: 'https://www.boostcasino.com/fi',
        EE: 'https://www.boostcasino.com/ee',
        RU: 'https://www.boostcasino.com/ru',
    };
    languagePage.selectLanguage(languageCode, languageUrls[languageCode]);
});

Then('I should see the URL as {string}', (expectedUrl) => {
    cy.url().should('eq', expectedUrl);
});

Then('the language bar should display {string}', (languageText) => {
    languagePage.getLanguageBar().should('include.text', languageText.toUpperCase());
});
