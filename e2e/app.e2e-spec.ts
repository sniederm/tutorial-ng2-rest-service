import { TutorialNg2RestServicePage } from './app.po';

describe('tutorial-ng2-rest-service App', () => {
  let page: TutorialNg2RestServicePage;

  beforeEach(() => {
    page = new TutorialNg2RestServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
