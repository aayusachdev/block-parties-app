import { render, screen } from '@testing-library/react';
import EventsLayout from './index';
import React from 'react'

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
},];

describe('/components/EventsLayout', () => {

  it('renders Events List Container component', async () => {
    render(<EventsLayout events={mockEventData} />)
    const firstEventCardElement = await screen.findByText('Brandenburg');
    expect(firstEventCardElement).toBeInTheDocument();

    const secondEventCardElement = await screen.findByText('Charlottenburg-Wilmersdorf');
    expect(secondEventCardElement).toBeInTheDocument();
  });

});