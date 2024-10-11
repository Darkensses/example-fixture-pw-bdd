import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I open url {string}', async ({ page }, url) => {
  await page.goto(url);
});

When('I enter my credentials', async ({ page }) => {
  await page.getByPlaceholder('Username').fill('standard_user');
	await page.getByPlaceholder('Password').fill('secret_sauce');
});

Then('I click the login button', async ({page}) => {
	await page.locator('#login-button').click();
});

Then('I see the products page', async ({ page }) => {
  await expect(page.locator('[data-test=title]')).toHaveText('Products');
});
