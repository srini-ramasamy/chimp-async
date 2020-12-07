@watch
Feature: Search something

  Scenario: Search for canva
    Given I go to Google
    When I search for "Canva"
    And I see the search container
    Then I see "Canva (@canva) · Twitter"
    And I check the url