import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Mic2 } from 'lucide-react';
import Home from './pages/Home';
import SpeakerRegistration from './pages/SpeakerRegistration';
import FindSpeaker from './pages/FindSpeaker';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <Mic2 className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-2xl font-bold text-orange-500">Vaani</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link to="/speaker-registration" className="text-gray-600 hover:text-orange-500 transition">For Speakers</Link>
                <Link to="/find-speaker" className="text-gray-600 hover:text-orange-500 transition">For Organizers</Link>
                <Link to="/about" className="text-gray-600 hover:text-orange-500 transition">About</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speaker-registration" element={<SpeakerRegistration />} />
          <Route path="/find-speaker" element={<FindSpeaker />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Mic2 className="h-6 w-6 text-orange-500" />
                  <span className="ml-2 text-xl font-bold">Vaani</span>
                </div>
                <p className="text-gray-400">Connecting voices that matter</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">For Speakers</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/speaker-registration" className="hover:text-orange-500 transition">Create Profile</Link></li>
                  <li><Link to="/speaker-registration" className="hover:text-orange-500 transition">Manage Calendar</Link></li>
                  <li><Link to="/speaker-registration" className="hover:text-orange-500 transition">Resources</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">For Organizers</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/find-speaker" className="hover:text-orange-500 transition">Find Speakers</Link></li>
                  <li><Link to="/find-speaker" className="hover:text-orange-500 transition">Plan Events</Link></li>
                  <li><Link to="/about" className="hover:text-orange-500 transition">Success Stories</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/about" className="hover:text-orange-500 transition">Support</Link></li>
                  <li><Link to="/about" className="hover:text-orange-500 transition">Terms</Link></li>
                  <li><Link to="/about" className="hover:text-orange-500 transition">Privacy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Vaani. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App