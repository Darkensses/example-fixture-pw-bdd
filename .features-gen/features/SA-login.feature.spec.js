/** Generated from: features\SA-login.feature */
import { test } from "playwright-bdd";

test.describe("Sauce Demo Login", () => {

  test("Login", async ({ Given, page, When, Then }) => {
    await Given("I open url \"https://www.saucedemo.com/\"", null, { page });
    await When("I enter my credentials", null, { page });
    await Then("I click the login button", null, { page });
    await Then("I see the products page", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\SA-login.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Login": {"pickleLocation":"3:5"},
};