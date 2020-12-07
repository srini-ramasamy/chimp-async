export class PageObject {
    static create() {
      return new PageObject();
    }
  
    get SearchContainer() {
        return browser.$('#search');
    }
  
    async getUrl() {
      return await browser.getUrl();
    }
  }
  