import React from 'react';
import '../../styles/eventslayout.css';

const EventCard = React.lazy(()=> import('../EventCard'));


/**
 * Container Grid component for all the EventCard components.
 */
export default function EventsLayout({ events }) {
  return (
    <div className="events-container">
      {events.map((event, index) => (<EventCard key={index} {...event} />))}
    </div>
  )
}
