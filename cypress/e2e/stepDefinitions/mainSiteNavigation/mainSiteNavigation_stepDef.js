import MainSiteNavigation from "../../pages/MainSiteNavigation";

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const mainSite = new MainSiteNavigation();

Given("the user is on the main page of the Boost Casino website", () => {
  mainSite.visitMainPage(); // Navigate to the main page
});

When("the user navigates to all the Casino sections", () => {
  mainSite.casinoNavSections(); // Navigate through all Casino sections
});

Then("the user navigates to all the Live Casino sections", () => {
  mainSite.liveCasinoSections(); // Navigate through all Live Casino sections
});

And("the user navigates to all the Promotions sections", () => {
  mainSite.promotionsSections(); // Navigate through all Promotions sections
});
