import { BeforeAll, AfterAll, AfterStep } from '@cucumber/cucumber';
import { chromium,firefox, webkit,Page, Browser, expect, BrowserContext } from "@playwright/test";
import { loginPage } from '../pages/loginPage';
import { Before, After } from '@cucumber/cucumber';

let page: Page;
let LoginPage: loginPage;

let browser: Browser | null = null;

Before(async function (scenario) {
  const tags = scenario.pickle.tags; // Access tags for the scenario
  let browserName = 'chromium'; // Default browser

  // Find a tag that starts with 'browser='
  const browserTag = tags.find(tag => tag.name.startsWith('@browser='));
  if (browserTag) {
    browserName = browserTag.name.split('=')[1];
  }

  // Launch the specified browser
  switch (browserName) {
    case 'firefox':
      browser = await firefox.launch({ headless: false });
      page=await browser.newPage();
      await page.goto('https://www.hudl.com/login');
      break;
    case 'webkit':
      browser = await webkit.launch({ headless: false });
      page=await browser.newPage();
      await page.goto('https://www.hudl.com/login');
      break;
    default:
      browser = await chromium.launch({ headless: false });
      page=await browser.newPage();
      await page.goto('https://www.hudl.com/login');
      break;
  }
  this.browser = browser;
});

AfterStep(async function ({pickle,result}) {
  const img = await page.screenshot(
    { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
    await this.attach(img, "image/png" );
})
After(async function () {
  // Close the browser after the scenario
  if (browser) {
    await browser.close();
  }

 });
export{page,browser}
