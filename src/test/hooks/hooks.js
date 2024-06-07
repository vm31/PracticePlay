const { BeforeAll,AfterAll } = require('@cucumber/cucumber');
const pageFixture = require('./pageFixture');

BeforeAll(async function() {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    pageFixture.page = page;
});

