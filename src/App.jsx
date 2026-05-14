import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';

// Import the Page components (We will create these next)
import LandingPage from './pages/AuthAdmin/LandingPage';
import MapDisplay from './pages/DashboardMap/MapDisplay';
import SubmissionForm from './pages/QuestMedia/SubmissionForm';
import Leaderboard from './pages/EconomySocial/Leaderboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col md:flex-row">
        <Navbar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/map" element={<MapDisplay />} />
            <Route path="/quest" element={<SubmissionForm />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;