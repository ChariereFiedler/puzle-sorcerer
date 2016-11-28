Feature: Generate a Typescript model from a
  Loopback json file

  Scenario: Generate file from CLI
    Given: A loopback model Json file defining an Event class
    When: I put `$spell /models/event.json ./build/`
    Then: I get a event.ts file in ./build/ folder with good syntax