import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectTemplate from './pages/SelectTemplate';
import CreateEvent from './pages/CreateEvent';
import EventList from './pages/EventList';
import EventDetail from './pages/EventDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectTemplate />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
