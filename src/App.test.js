import App from './App';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent  } from '@testing-library/react';

const mockEventData = [{
  "id": "314",
  "bezirk": "Brandenburg",
  "bezeichnung": "Wochenmarkt Am Nauener Tor in Potsdam",
  "strasse": "Hegelallee 55",
  "plz": "14467",
  "tage": "Mi, Sa",
  "zeiten": "09:00 - 16:00",
  "betreiber": "14467 Potsdam, Ansprechpartner: Steve Sapke, Tel.: 0176/59 52 39 21",
  "email": "mailto:marktamnauenertor@web.de",
  "www": "http://www.markt-am-nauener-tor.de",
  "rss_titel": "Wochenmarkt Am Nauener Tor\n14467 Potsdam"
}, {
  "id": "11",
  "bild": "",
  "copyright": "",
  "bezirk": "Charlottenburg-Wilmersdorf",
  "bezeichnung": "Wochenmarkt Karl-August-Platz",
  "strasse": "Karl-August-Platz",
  "plz": "10625",
  "tage": "Mi\nSa",
  "zeiten": "08:00 - 13:00\n08:00 - 14:00",
  "betreiber": "Bezirksamt Charlottenburg-Wilmersdorf, Marktverwaltung, Hohenzollerndamm 174-177, 10713 Berlin\nTel.: 9029 - 290 72/3",
  "email": "",
  "www": "",
  "bemerkungen": "",
  "rss_titel": "Wochenmarkt Karl-August-Platz"
}];

describe('/App Component', () => {
  let originFetch;
  beforeEach(() => {
    originFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originFetch;
  });


  it('should make a fetch call when rendered', async () => {
    const fakeResponse = { 'events': mockEventData };
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;
    render(<App />);
    expect(mockedFetch).toBeCalledTimes(1);
  });

  it('onEventFilterChange method to be called when searching for an event', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Search events by district...');
    fireEvent.change(input, {target: {value: 'Brandenburg'}});
    expect(input.value).toBe('Brandenburg');
  });

});