import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page,expect,BrowserContext} from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { page } from '../hooks/hook';



let LoginPage: loginPage;

Given('I am on the Hudl login page', async () => {
    await page.goto('https://www.hudl.com/login');
    LoginPage=new loginPage(page);
  })
When(/^I enter Username as "([^"]*)"$/, async (args1) => {
	await LoginPage.selectusername(args1);
	return true;
});

When('I click the continue button', async() => {
  await LoginPage.clickContinueBtn();
  })

When('I enter  Password as {string}', async (s: string) => {
    await LoginPage.selectpassword(s);
    await LoginPage.clickContinueBtn2();
})

Then('I am able to see the homepage', async() => {
   await LoginPage.assertHomepage();
})

Then('I am not able to login to the application as {string}', async function (string) {
  
    await page.getByText('Enter a valid email.').isVisible();
});
 Then('I close the browser', async function () {
    //await LoginPage.close();
 });



