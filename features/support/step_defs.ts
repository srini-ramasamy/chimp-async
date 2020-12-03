import * as expect from 'jest-matchers';
import { PageObject } from './support.ts';

export type PageObjectScope = { po: PageObject };

export default function () {
    this.Given(/^I go to Google$/, function (this: PageObjectScope) {
        browser.url('http://google.com');
    });

    this.When(/^I search for "([^"]*)"$/, async function (this: PageObjectScope, searchTerm: string) {
        await browser.setValue('input[name="q"]', searchTerm);
        await browser.keys(['Enter']);
    });

    this.Then(/^I see the search container/, function (this: PageObjectScope) {
        this.po =  PageObject.create();
        this.po.search =   this.po.SearchContainer;
    });

    this.Then(/^I see "([^"]*)"$/, function (this: PageObjectScope, link: string) {
        this.po.search.waitForExist('span=' + link, 3000);
    });

    this.Then(/^I check the url$/, async function (this: PageObjectScope) {
        const url = await this.po.getUrl(); // async method
        console.log(url);
        expect(url).toContain('https://www.google.com/search');
    });
}