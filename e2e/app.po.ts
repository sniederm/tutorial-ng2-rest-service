import { browser, element, by } from 'protractor';

export class TutorialNg2RestServicePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
