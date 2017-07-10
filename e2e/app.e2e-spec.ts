import { DataBindPage } from './app.po';

describe('data-bind App', () => {
  let page: DataBindPage;

  beforeEach(() => {
    page = new DataBindPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
