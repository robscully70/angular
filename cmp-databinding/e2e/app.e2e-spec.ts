import { CmpDatabindingStartPage } from './app.po';

describe('cmp-databinding-start App', function() {
  let page: CmpDatabindingStartPage;

  beforeEach(() => {
    page = new CmpDatabindingStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
