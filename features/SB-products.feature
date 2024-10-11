Feature: Products Screen

	Scenario: Check that a product is displayed
		Given I am on the products page
		When I search for the product with the title "Sauce Labs Backpack"
  	Then I should see the product title
  	Then I should see the image for the product
