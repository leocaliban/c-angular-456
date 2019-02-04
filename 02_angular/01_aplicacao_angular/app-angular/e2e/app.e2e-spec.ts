import { AppAngularPage } from './app.po';

describe('app-angular App', () => {
  let page: AppAngularPage;

  beforeEach(() => {
    page = new AppAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to apg!');
  });
});
