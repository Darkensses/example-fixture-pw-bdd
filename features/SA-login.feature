Feature: Sauce Demo Login

    Scenario: Login
        Given I open url "https://www.saucedemo.com/"
        When I enter my credentials
        Then I click the login button
        Then I see the products page
