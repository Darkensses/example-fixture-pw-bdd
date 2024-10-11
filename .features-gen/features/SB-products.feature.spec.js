/** Generated from: features\SB-products.feature */
import { test } from "../../steps/myFixture.js";

test.describe("Products Screen", () => {

  test("Check that a product is displayed", async ({ Given, pageLogged, When, Then }) => {
    await Given("I am on the products page", null, { pageLogged });
    await When("I search for the product with the title \"Sauce Labs Backpack\"", null, { pageLogged });
    await Then("I should see the product title", null, { pageLogged });
    await Then("I should see the image for the product", null, { pageLogged });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\SB-products.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Check that a product is displayed": {"pickleLocation":"3:2"},
};