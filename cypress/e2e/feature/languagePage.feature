Feature: Verify Language Selection
  As a user, I want to select a language from the dropdown 
  so that the website updates to the chosen language.

  Background:
    Given I am on the homepage

  Scenario Outline: Change language and verify URL and language text
    When I select "<languageCode>" from the language dropdown
    Then I should see the URL as "<expectedUrl>"
    And the language bar should display "<languageText>"

    Examples:
      | languageCode | expectedUrl                         | languageText |
      | FI           | https://www.boostcasino.com/fi      | FI           |
      | EE           | https://www.boostcasino.com/ee      | EE           |
      | RU           | https://www.boostcasino.com/ru      | RU           |

