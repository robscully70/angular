import { CmpPage } from './app.po';

describe('cmp App', function() {
  let page: CmpPage;

  beforeEach(() => {
    page = new CmpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
