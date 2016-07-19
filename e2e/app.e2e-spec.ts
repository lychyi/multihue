import { MultihuePage } from './app.po';

describe('multihue App', function() {
  let page: MultihuePage;

  beforeEach(() => {
    page = new MultihuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
