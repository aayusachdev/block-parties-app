import { render, screen } from '@testing-library/react';
import EventCard from './index';

const mockEventData = {
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
};


describe('/components/EventCard', () => {

  it('renders the Event card component with the correct event details', () => {
    render(<EventCard {...mockEventData} />);

    const eventcardContainerElement = screen.getByRole("heading");
    expect(eventcardContainerElement.textContent).toEqual('Bezirk: Brandenburg');
    expect(eventcardContainerElement).toBeInTheDocument();

    const locationElement = screen.getByText('Brandenburg');
    expect(locationElement).toBeInTheDocument();

    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.textContent).toEqual("Open in Maps");
    expect(linkElement.href).toContain("http://maps.google.co.in/maps?q=Hegelallee%2055,%2014467");

  });

});