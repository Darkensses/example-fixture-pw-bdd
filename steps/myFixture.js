import { expect } from '@playwright/test';
import { test as base, createBdd } from "playwright-bdd";

export const test = base.extend({
	account: async({},use, testInfo) =>{
		const username = testInfo.project.use.username;
    const password = testInfo.project.use.password;

    await use({ username, password });
	},
	pageLogged: async({page, account}, use) => {
		await page.goto('https://www.saucedemo.com/');
		console.log(account);

		await page.getByPlaceholder('Username').fill('standard_user');
		await page.getByPlaceholder('Password').fill('secret_sauce');
		await page.locator('#login-button').click();
		await expect(page.locator('[data-test=title]')).toHaveText('Products');
		use(page);
	}
});

export const {Given, Then, When} = createBdd(test);