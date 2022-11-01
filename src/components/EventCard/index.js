import '../../styles/eventcard.css';

/**
 * Component which render all the event details on a card like UI.
 * 
 * @param  {bezirk, betreiber, plz, strasse, tage, zeiten }  
 * 
 * @returns A Card with all the event details and a hyperlink to open that event in google maps.
 */
export default function EventCard({bezirk, betreiber, plz, strasse, tage, zeiten }) {
  return (
    <div id="eventCard" className="event-card">
    <h4><strong>Bezirk: </strong>{bezirk}</h4><br/>
    <p>{`Betreiber: ${betreiber?.slice(0,30)}`}</p><br/>
    <div>
    strasse: {strasse}, {plz}.<br/>
    Termine: {`${tage}, ${zeiten?.slice(0,20)}`}
    </div>
    <a href={`http://maps.google.co.in/maps?q=${strasse}, ${plz}`} target='_blank' rel="noreferrer">Open in Maps</a>
  </div>
  );
}
