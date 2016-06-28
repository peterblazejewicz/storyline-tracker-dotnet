import { StorylineTrackerClientPage } from './app.po';

describe('storyline-tracker-client App', function() {
  let page: StorylineTrackerClientPage;

  beforeEach(() => {
    page = new StorylineTrackerClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
