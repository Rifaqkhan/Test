Feature: Dashboard Page
  As a registered or un-registered user, I want to navigate to the dashboard page and view the available games and promotions.

  Scenario: Verify guest user can search a game and play it
    Given I navigate to the dashboard as a "guest user"
    And I see search bar on dashboard
    When I search for the game "Book of Dead"
    And I see game search results
    And I click on the game
    Then I see the "Book of dead" game is loaded