// import HomePage from "../../pages/HomePage"; // Importing the HomePage class

// const casino = new HomePage; // Create an instance of the HomePage class

// describe('Verify Boost Casino Homepage', () => {
  
//   it('should navigate to the homepage, search for a game, and click on the game', () => {
//     casino.navigate()  // Navigate to the homepage
//       .searchForGame()  // Perform the search for 'book of dead'
//       .clickOnTheGame(); // Click on the game thumbnail
//   });

// });

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pages/HomePage";

const casino = new HomePage(); // Create an instance of the HomePage class

Given("the user navigates to the homepage", () => {
  casino.navigate(); // Navigate to the homepage
});

When('the user searches for the game "Book of Dead"', () => {
  casino.searchForGame("Book of Dead"); // Perform the search for 'Book of Dead'
});

Then("the user clicks on the game thumbnail", () => {
  casino.clickOnTheGame(); // Click on the game thumbnail
});

