import { HaarisPage } from './app.po';

describe('haaris App', () => {
  let page: HaarisPage;

  beforeEach(() => {
    page = new HaarisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
