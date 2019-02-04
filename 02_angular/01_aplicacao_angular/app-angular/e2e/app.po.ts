import { browser, by, element } from 'protractor';

export class AppAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('apg-root h1')).getText();
  }
}
