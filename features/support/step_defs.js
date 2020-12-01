module.exports = function () {
    this.Given(/^I go to Google$/, async function () {
        await browser.url('http://google.com');
    });

    this.When(/^I search for "([^"]*)"$/, async function (searchTerm) {
        await browser.setValue('input[name="q"]', searchTerm);
        await browser.keys(['Enter']);
    });

    this.Then(/^I see "([^"]*)"$/, async function (link) {
        await browser.waitForExist('h3=' + link);
    });
}