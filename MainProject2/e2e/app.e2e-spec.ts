import { MainProject2Page } from './app.po';

describe('main-project2 App', () => {
  let page: MainProject2Page;

  beforeEach(() => {
    page = new MainProject2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
