import { EponsFacilityTimeSpentDashboardPage } from './app.po';

describe('epons-facility-time-spent-dashboard App', () => {
  let page: EponsFacilityTimeSpentDashboardPage;

  beforeEach(() => {
    page = new EponsFacilityTimeSpentDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
