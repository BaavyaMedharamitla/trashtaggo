import { Routes, Route } from "react-router-dom";

// Base Landing Page
import Home from "./pages/Home";

// Auth Components
import Login from "./pages/AuthAdmin/Login";
import Register from "./pages/AuthAdmin/Register";
import AdminDashboard from "./pages/AuthAdmin/AdminDashboard";

// Map Components
import ImpactMap from "./pages/DashboardMap/ImpactMap";
import Dashboard from "./pages/DashboardMap/Dashboard";

// Economy / Social Components
import Leaderboard from "./pages/EconomySocial/Leaderboard";
import Rewards from "./pages/EconomySocial/Rewards";
import Wallet from "./pages/EconomySocial/Wallet";

// Quest / Media Components
import SubmissionForm from "./pages/QuestMedia/SubmissionForm";

function App() {
  return (
    <Routes>
      {/* Public Landing Route */}
      <Route path="/" element={<Home />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Core SaaS Dashboard & Features */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/map" element={<ImpactMap />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/submission" element={<SubmissionForm />} />
      
      {/* Gamification Hubs */}
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/wallet" element={<Wallet />} />
      
      {/* Management Layer */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;