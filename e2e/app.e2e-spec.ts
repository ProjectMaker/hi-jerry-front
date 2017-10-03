import { HiJerryFrontPage } from './app.po';

describe('hi-jerry-front App', () => {
  let page: HiJerryFrontPage;

  beforeEach(() => {
    page = new HiJerryFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
