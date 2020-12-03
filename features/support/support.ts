export class PageObject {
  static create(): PageObject {
    return new PageObject();
  }

  get SearchContainer() {
      return browser.$('#search');
  }

  async getUrl() {
    return await browser.getUrl();
  }
}
