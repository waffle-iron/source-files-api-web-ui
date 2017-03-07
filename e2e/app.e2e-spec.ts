import { SourceWebPage } from './app.po';

describe('source-web App', () => {
  let page: SourceWebPage;

  beforeEach(() => {
    page = new SourceWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
