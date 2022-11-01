
import fetchEventsData from './index';


describe('fetchEventsData works', () => {
  test('Returns an array of events', async () => {
    const json = await fetchEventsData();
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toBeGreaterThan(0);
  });
});
