@watch
Feature: Search something

  Scenario: Search for canva
    Given I go to Google
    When I search for "Canva"
    Then I see "Canva"