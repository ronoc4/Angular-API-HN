import { AngularAPIHNPage } from './app.po';

describe('angular-api-hn App', () => {
  let page: AngularAPIHNPage;

  beforeEach(() => {
    page = new AngularAPIHNPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
