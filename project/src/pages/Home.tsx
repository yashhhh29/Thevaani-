import React from 'react';
import { Link } from 'react-router-dom';
import { Mic2, Calendar, Users2, Search, Phone, Building2 } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description, bgColor }: { icon: any, title: string, description: string, bgColor: string }) {
  return (
    <div className={`${bgColor} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
      <Icon className="w-10 h-10 text-white mb-4" />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/90 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold text-orange-600 mb-6">
            Connect with the Perfect Speaker
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Vaani brings together talented speakers and event organizers on one powerful platform.
            Find your voice, share your expertise, and create impactful events.
          </p>
          <div className="flex gap-6 justify-center">
            <Link 
              to="/speaker-registration" 
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Register as Speaker
            </Link>
            <Link 
              to="/find-speaker" 
              className="bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Find a Speaker
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">For Speakers</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <FeatureCard
              icon={Mic2}
              title="Create Your Profile"
              description="Build a compelling profile showcasing your expertise, topics, videos, and reviews."
              bgColor="bg-orange-500"
            />
            <FeatureCard
              icon={Calendar}
              title="Set Your Availability"
              description="Manage your calendar and let organizers book you effortlessly."
              bgColor="bg-yellow-500"
            />
            <FeatureCard
              icon={Users2}
              title="Grow & Collaborate"
              description="Connect with mentors and fellow speakers to expand your network."
              bgColor="bg-orange-400"
            />
          </div>

          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">For Organizers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Search}
              title="Discover Speakers"
              description="Find the perfect speaker using our AI-powered search based on expertise and ratings."
              bgColor="bg-yellow-500"
            />
            <FeatureCard
              icon={Phone}
              title="Instantly Connect"
              description="Use Vaani ID to directly connect with your chosen speakers."
              bgColor="bg-orange-500"
            />
            <FeatureCard
              icon={Building2}
              title="Host Events Seamlessly"
              description="Organize everything from intimate webinars to large conferences with ease."
              bgColor="bg-yellow-400"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join Vaani today and become part of a growing community of speakers and event organizers.
          </p>
          <Link 
            to="/speaker-registration" 
            className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors shadow-lg inline-block"
          >
            Create Your Account
          </Link>
        </div>
      </div>
    </>
  );
}