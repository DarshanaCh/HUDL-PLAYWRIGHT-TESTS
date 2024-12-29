import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page,expect,BrowserContext} from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { page } from '../hooks/hook';

let LoginPage: loginPage;

When (/^I click forget password link$/, async () => {
await page.getByRole('link', { name: 'Forgot Password' }).click();
});

Then(/^I am able to see the reset password page$/, async() => {
    await page.getByRole('heading', { name: 'Reset Password' }).click();
});

Then('I should able to click continue button', async() => {
  await page.getByRole('button', { name: 'Continue' }).click();
})

Then('I should see the email field option',async () => {
    await page.getByLabel('Email').click();
})
