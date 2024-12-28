import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page,expect,BrowserContext} from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { page } from '../hooks/hook';



let LoginPage: loginPage;


When(/^I should see Logout option$/, async() => {
    await page.getByRole('link', { name: 'Log Out' }).isVisible();
   
});

When(/^I should click Logout$/, async() => {
    await page.getByRole('link', { name: 'Log Out' }).click();
});

When(/^I should redirect to homepage$/, async() => {
    await page.getByRole('link', { name: 'Log in' }).isVisible();
});