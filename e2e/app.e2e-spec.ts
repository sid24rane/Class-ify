import { ClassIfyPage } from './app.po';

describe('class-ify App', function() {
  let page: ClassIfyPage;

  beforeEach(() => {
    page = new ClassIfyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
