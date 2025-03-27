import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Clock } from 'lucide-react';

const SAMPLE_SPEAKERS = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Leadership Expert & TEDx Speaker",
    topics: ["Leadership", "Innovation", "Team Building"],
    rating: 4.9,
    location: "New York, USA",
    rate: "$1,000/hour",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Tech Innovator & Keynote Speaker",
    topics: ["AI", "Digital Transformation", "Future of Work"],
    rating: 4.8,
    location: "San Francisco, USA",
    rate: "$1,200/hour",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    name: "Emma Williams",
    title: "Business Strategy Consultant",
    topics: ["Business Strategy", "Entrepreneurship", "Marketing"],
    rating: 4.7,
    location: "London, UK",
    rate: "$900/hour",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

export default function FindSpeaker() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">Find Your Perfect Speaker</h1>
        
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Search by name, topic, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_SPEAKERS.map((speaker) => (
            <div key={speaker.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src={speaker.image} alt={speaker.name} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-semibold">{speaker.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                <p className="text-gray-600 mb-4">{speaker.title}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {speaker.topics.map((topic) => (
                    <span key={topic} className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{speaker.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{speaker.rate}</span>
                  </div>
                </div>
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}