import Header from './components/Header';
import React, { useState, useEffect, useMemo } from 'react';
import './styles/app.css';
import fetchEventsData from './api';
import { debounce } from 'lodash';


// Dynamic import for the EventsLayout Container component.
const EventsLayout = React.lazy(() => import('./components/EventsLayout'));

/**
 * Parent App component - fetching the events[] from API and providing it to the EventsLayout Component.
 */
const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eventLocation, setEventLocation] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchEventsData().then((events) => {
      setEvents(events);
      setLoading(false);
    });
  }, []);

  const filteredEventsByLocation = useMemo(() => events?.filter(event => event.bezirk.toLowerCase().includes(eventLocation.toLowerCase())),
    [eventLocation, events]);

  const onEventFilterChange = (event) => {
    setEventLocation(event.target.value);
  }
  const debouncedChangeHandler = useMemo(
    () => debounce(onEventFilterChange, 300),
    []);

  return (
    <>
      <Header />
      <div className="eventfilter-container">
        <input
          onChange={debouncedChangeHandler}
          type="text"
          name="event-filter"
          placeholder="Search events by district..."
          className="eventfilter-container--input"
        />
      </div> 
        {loading && <div className="loading-container">Your events are loading, please wait.</div>}
        {filteredEventsByLocation.length !== 0 && <EventsLayout events={filteredEventsByLocation} />}
        {eventLocation.length !== 0 && filteredEventsByLocation.length === 0 &&
        <div className='loading-container'>No events found for this search.</div>}
    </>
  );
}

export default App;