const expect = require('jest-matchers');
const { PageObject } = require('./support.js');

module.exports = function () {
    this.Given(/^I go to Google$/, function () {
        browser.url('http://google.com');
    });

    this.When(/^I search for "([^"]*)"$/, async function (searchTerm) {
        await browser.setValue('input[name="q"]', 'Canva');
        await browser.keys(['Enter']);
    });

    this.Then(/^I see the search container/, function () {
        this.po =  PageObject.create();
        this.po.search = this.po.SearchContainer;
    });

    this.Then(/^I see "([^"]*)"$/, function (link) {
        this.po.search.waitForExist('h3=' + link, 3000);
    });

    this.Then(/^I check the url$/, async function () {
        const url = await this.po.getUrl(); // async method
        console.log(url);
        expect(url).toContain('https://www.google.com/search');
    });
}