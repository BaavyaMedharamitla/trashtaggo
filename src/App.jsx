import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, Camera, Wallet, Trophy } from 'lucide-react';

// TEMPORARY: These will eventually move to your src/pages/ folders
const Landing = () => (
  <div className="flex flex-col items-center justify-center h-[80vh] text-center">
    <h1 className="text-6xl mb-4 bg-gradient-to-r from-brand-purple to-purple-400 bg-clip-text text-transparent">TrashTagGo</h1>
    <p className="text-gray-400 text-xl max-w-md">Clean the world, earn GreenCoins, and claim your rewards.</p>
    <Link to="/quest" className="mt-8 px-8 py-3 bg-brand-purple rounded-full font-bold hover:scale-105 transition-transform">Join the Quest</Link>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navigation Bar (The 'Plumbing') */}
        <nav className="fixed bottom-0 left-0 w-full bg-brand-surface border-t border-white/5 p-4 flex justify-around md:top-0 md:h-full md:w-20 md:flex-col md:border-r">
          <Link to="/" className="p-3 hover:text-brand-purple transition-colors"><LayoutDashboard /></Link>
          <Link to="/quest" className="p-3 hover:text-brand-purple transition-colors"><Camera /></Link>
          <Link to="/wallet" className="p-3 hover:text-brand-purple transition-colors"><Wallet /></Link>
        </Link>

        {/* The Content Area */}
        <main className="md:ml-20 p-6">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<div className="p-10 text-2xl">Member 2: Map View goes here</div>} />
            <Route path="/quest" element={<div className="p-10 text-2xl">Member 3: Upload logic goes here</div>} />
            <Route path="/wallet" element={<div className="p-10 text-2xl">Member 4: Coin balance goes here</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;