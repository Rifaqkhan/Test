Feature: Boost Casino Homepage

  Scenario: User visits the homepage, searches for a game, and clicks on the game
    Given the user navigates to the homepage
    When the user searches for the game "Book of Dead"
    Then the user clicks on the game thumbnail
