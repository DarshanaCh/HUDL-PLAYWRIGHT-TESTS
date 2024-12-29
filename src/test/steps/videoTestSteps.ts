import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page,expect,BrowserContext} from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { page } from '../hooks/hook';
import { videoPage } from '../pages/videoPage';


let LoginPage: loginPage;
let VideoPage: videoPage;
Given('I have successfully Logged in', async function () {
    
    await page.goto('https://www.hudl.com/login');
    LoginPage=new loginPage(page);
    await LoginPage.selectusername('chandaranadarshana@yahoo.co.uk');
    await LoginPage.clickContinueBtn();
    await LoginPage.selectpassword('Password1!');
    await LoginPage.clickContinueBtn2();
    await LoginPage.assertHomepage();
    
    });

Given('I should see my profile name', async function () {
           await page.getByText('Darshana C').isVisible();
    });

When('I select video link', async function () {
            await page.getByRole('link', { name: 'Video' }).click();           
    });

Then('I should see the list of videos', async function () {
           VideoPage=new videoPage(page);
           await page.locator('section').nth(1).isVisible();
    });