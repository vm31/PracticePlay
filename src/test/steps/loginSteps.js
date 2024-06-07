  const { Given, When, Then } = require('@cucumber/cucumber');
  const { chromium } = require('playwright');

const pageFixture = require('../hooks/pageFixture');
  Given('user navigates to the application', async function () {
    await pageFixture.page.goto('https://bookcart.azurewebsites.net/');
  });

  Given('user clicks on login button', async function () {
    await pageFixture.page.locator("//span[text()='Login']").click();
  });

  Given('user enter username: {string}', async function (username) {
  });

  Given('user enter password: {string}', async function (password) {
  });

  When('user clicks on the login button', async function () {
  });
  Then('login should be successful', async function () {
  });
