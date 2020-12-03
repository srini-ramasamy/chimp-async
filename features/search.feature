@watch @focus
Feature: Search something

  Scenario: Search for canva
    Given I go to Google
    When I search for "Canva"
    Then I see the search container
    And I see "Collaborate & create amazing graphic design for free - Canva"
    And I check the url