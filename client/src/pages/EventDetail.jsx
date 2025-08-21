import EventHero from '../components/eventDetail/EventHero';
import EventAbout from '../components/eventDetail/EventAbout';
import EventSpeakers from '../components/eventDetail/EventSpeakers';
import EventAgenda from '../components/eventDetail/EventAgenda';
import EventPartners from '../components/eventDetail/EventPartners';
import EventVideos from '../components/eventDetail/EventVideos';
import EventContact from '../components/eventDetail/EventContact';
import EventNav from '../components/eventDetail/EventNav';

import mockEvent from '../data/mockEventData';

export default function EventDetail() {
  const event = mockEvent; // Replace with dynamic fetch later

  return (
    <div className="relative">
      <EventNav
        sections={[
          'Hero',
          'About',
          'Speakers',
          'Agenda',
          'Partners',
          'Videos',
          'Contact',
        ]}
      />

      <div id="hero">
        <EventHero data={event.hero} />
      </div>
      <div id="about">
        <EventAbout data={event.about} />
      </div>
      <div id="speakers">
        <EventSpeakers data={event.speakers} />
      </div>
      <div id="agenda">
        <EventAgenda data={event.agenda} />
      </div>
      <div id="partners">
        <EventPartners data={event.partners} />
      </div>
      <div id="videos">
        <EventVideos data={event.videos} />
      </div>
      <div id="contact">
        <EventContact data={event.contact} />
      </div>
    </div>
  );
}
