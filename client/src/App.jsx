import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Components
import SelectTemplate from './pages/SelectTemplate';
import CreateEvent from './pages/CreateEvent';
import EventList from './pages/EventList';
import EventDetail from './pages/EventDetail';
import EventsCalendar from './pages/EventsCalendar';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<SelectTemplate />} />

        {/* Event Creation Flow */}
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetail />} />

        {/* Calendar View */}
        <Route path="/eventscalendar" element={<EventsCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
