Feature: example

  swallet API Automation with Token example

  Scenario: Get token list
    Given I make a GET request to /tokens
     When I receive a response
     Then I expect response status code to be 200
      And I expect response body to contain
      """
      "name":"LINK","symbol"
      """