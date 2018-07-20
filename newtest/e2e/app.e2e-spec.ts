import { NewtestPage } from './app.po';

describe('newtest App', () => {
  let page: NewtestPage;

  beforeEach(() => {
    page = new NewtestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
