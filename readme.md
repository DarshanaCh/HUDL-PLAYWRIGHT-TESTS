# Playwright-Cucumber Automation Framework

This project demonstrates an automation framework for testing the login functionality of the [Hudl](https://www.hudl.com/) application using **Playwright** and **Cucumber**. The framework is designed to be modular, easy to extend, and suitable for testing web applications with Behavior Driven Development (BDD).

---

## 📋 Table of Contents
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [How to Run Tests](#-how-to-run-tests)
- [How to Run Test Report](#-test-results)
- [Key Features](#-key-features)
- [Writing Tests](#️-writing-tests)
- [Contributing](#-contributing)
- [License](#-license)
## 🔧 Prerequisites

Ensure you have the following installed on your system:

1. [Node.js](https://nodejs.org/) (v16 or later)
2. [Playwright](https://playwright.dev/)
3. A package manager like `npm` or `yarn`.
4. @cucumber/cucumber
5. multiple-cucumber-html-reporter
6. ts-node
## 🚀 Installation

Follow these steps to set up the project:

1. Clone the repository:
   ```bash
   git clone <https://github.com/DarshanaCh/HUDL-PLAYWRIGHT-TESTS.git>
   cd Hudl-playwright-tests
   npm install
   npx install playwright
## 📂 Project Structure
The project follows a modular structure for scalability and maintainability:

src\test   .

    ├── features/                   # Contains feature files written in Gherkin
    │   └── loginTest.feature       # Example feature file for Hudl login
    |── helpers/reports             # Contains feature files written in Gherkin
    │   └── report.ts               # report configuration     
    ├── pages/                      # Page Object Models (POMs)
    │   └── loginPage.ts            # Login page POM for Hudl
    ├── steps/                      # Step definitions for feature files
    │   └── loginTestSteps.ts       # Step definitions for login.feature
    ├── hooks/                      # Hooks for setup and teardown
    │   └── hook.ts                 # Cucumber hooks for browser initialization
    ├── test-results/               # Any additional test-specific utilities
    |   └── reports                 # stores cucumber reports
    |   └── screenshots             # stores screetshots for the scenarios
    ├── cucumber.tsconfig.json      # TypeScript config specific to Cucumber
    ├── playwright.config.ts        # Playwright configuration (optional)
    ├── README.md                   # Project documentation
    ├── package.json                # Dependencies and project scripts
    └── tsconfig.json               # TypeScript configuration
## 📋 How to run tests
 
    # Run All test

  npx cucumber-js --require-module ts-node/register --require ./steps/**/*.ts
  npm run test

    # Run Specific Feature
  npx cucumber-js features/login.feature --require-module ts-node/register --require ./steps/**/*.ts
  npm run test:login

    # Run Specific Browser
  tag with @browser=firefox or @browser=webkit or @browser=chromium to the scenario and run the feature
    npm run test:login

    # Run All the test with Chome
  By default test will use chromium browser

    # Run Tests in Headless Mode
  Modify the headless property in hook.ts or pass it programmatically to Playwright:

  await chromium.launch({ headless: true });
## 📋 Test Results
    # test reports
  cucumber-report html
  cucumber-report json
  Reprots can be found in test-results folder in project directory  
  you can find html report as index.html in project root directory

    # Screenshots
  All screensots for the scenarios can be found in screenshot folder in project directory
## ✨ Key Features

    # Behavior Driven Development (BDD):

       * Write tests in natural language using Gherkin syntax.
       * Step definitions link feature files to implementation logic.
    # Playwright Integration:

       * Fast and reliable browser automation.
       * Supports multiple browsers: Chromium, Firefox, and WebKit.

    # Page Object Model (POM):

       * Simplifies test maintenance and promotes reusability.
    # Modular Hooks:

       * Manage browser initialization and teardown with Cucumber hooks.
## 🖋️ Writing Tests
    
       # Example Feature File (features/login.feature)

        Feature: Login to Hudl

            Scenario: Successful login
                Given Open the browser and launch the Hudl application
                When I enter Username as "test@example.com" and Password as "password123"
                And I click the login button
                Then I should see the Hudl homepage
                And I close the browser

            Scenario: Unsuccessful login with invalid credentials
                Given Open the browser and launch the Hudl application
                When I enter Username as "wrong@example.com" and Password as "wrongpassword"
                And I click the login button
                Then I am not able to login to the application
                And I close the browser

       # Example Step Definition (steps/loginSteps.ts)
                import { Given, When, Then } from '@cucumber/cucumber';
                import { LoginPage } from '../pages/loginPage';
                import { chromium, Browser, Page } from '@playwright/test';

                let browser: Browser;
                let page: Page;
                let loginPage: LoginPage;

                Given('Open the browser and launch the Hudl application', async () => {
                browser = await chromium.launch({ headless: false });
                page = await browser.newPage();
                loginPage = new LoginPage(page);
                await loginPage.navigateToLoginPage();
                });

                When('I enter Username as {string} and Password as {string}', async (username: string, password: string) => {
                await loginPage.enterUsername(username);
                await loginPage.enterPassword(password);
                });

                Then('I should see the Hudl homepage', async () => {
                const isLoggedIn = await loginPage.isLoginSuccessful();
                if (!isLoggedIn) {
                    throw new Error('Login failed.');
                }
                });
## 🤝 Contributing
       
        We welcome contributions to this project! Feel free to fork the repository, make improvements, and create a pull request.
## 📝 License
  
        This project is licensed under the personal License. See the LICENSE file for more details.

        







