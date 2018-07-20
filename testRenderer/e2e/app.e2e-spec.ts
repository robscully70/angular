import { TestRendererPage } from './app.po';

describe('test-renderer App', () => {
  let page: TestRendererPage;

  beforeEach(() => {
    page = new TestRendererPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
