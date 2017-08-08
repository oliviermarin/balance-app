import { BalanceAppPage } from './app.po';

describe('balance-app App', () => {
  let page: BalanceAppPage;

  beforeEach(() => {
    page = new BalanceAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
