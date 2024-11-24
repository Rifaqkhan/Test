import HomePage from "../../pages/HomePage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const casino = new HomePage();

import LanguagePage from "../../pages/LanguagePage"; 

const languagePage = new LanguagePage();

Given(/^I am on the homepage$/, () => {
    casino.navigate();
});

When(/^I select "([^"]*)" from the language dropdown$/, (languageCode) => {
    const languageUrls = {
        FI: 'https://www.boostcasino.com/fi',
        EE: 'https://www.boostcasino.com/ee',
        RU: 'https://www.boostcasino.com/ru',
    };
    languagePage.selectLanguage(languageCode, languageUrls[languageCode]);
});

Then(/^I should see the URL as "([^"]*)"$/, (expectedUrl) => {
    cy.url().should('eq', expectedUrl);
});

Then(/^the language bar should display "([^"]*)"$/, (languageText) => {
    languagePage.getLanguageBar().should('include.text', languageText.toUpperCase());
});
