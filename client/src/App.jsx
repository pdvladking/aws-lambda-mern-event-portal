import Navbar from './components/Navbar';
import UploadForm from './components/UploadForm';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Home />
      <Navbar />
      <UploadForm />
    </div>
  );
}

export default App;
