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
    And I expect response follows json schema
      """
      {
      type: 'array',
      minItems: 1,
      items: {
      type: 'object',
      properties: {
      name: {type: 'string', minLength: 1},
      symbol: {type: 'string', minLength: 1},
      contractAddress: {type: 'string', minLength: 42, maxLength: 42},
      decimals: {type: 'integer'}
      },
      required: ['name', 'symbol', 'contractAddress', 'decimals']
      },
      uniqueItems: true,
      }
      """