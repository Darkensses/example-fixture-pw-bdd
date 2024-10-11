import { expect } from '@playwright/test';
import { Given, test, Then, When } from './myFixture';

let actualTitle;

Given('I am on the products page', async ({ pageLogged }) => {
});

When('I search for the product with the title {string}', async ({ pageLogged }, title) => {
	actualTitle = pageLogged.getByText(title);
});

Then('I should see the product title', async ({pageLogged}) => {
	await expect(actualTitle).toHaveText('Sauce Labs Backpack');
});

Then('I should see the image for the product', async ({ pageLogged }) => {
  await expect(pageLogged.locator('img[alt="Sauce Labs Backpack"]')).not.toHaveJSProperty('naturalWidth', 0);
});
