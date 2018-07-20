import { CmpDatabinding2Page } from './app.po';

describe('cmp-databinding2 App', function() {
  let page: CmpDatabinding2Page;

  beforeEach(() => {
    page = new CmpDatabinding2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
