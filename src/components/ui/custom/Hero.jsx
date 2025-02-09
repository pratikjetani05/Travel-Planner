import React, { Suspense , lazy, useEffect, useRef, useState } from 'react';
import { Button } from "../button";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import background from "../../../assets/background.webp"
import img1 from "../../../assets/image1.webp"
import img2 from "../../../assets/image2.webp"
import img3 from "../../../assets/image3.webp"
import img4 from "../../../assets/image4.webp"
import dest1 from "../../../assets/dest1.webp"
import dest2 from "../../../assets/dest2.webp"
import dest3 from "../../../assets/dest3.webp"
import { 
  Compass, 
  Map, 
  Calendar, 
  Globe2, 
  Plane, 
  Hotel, 
  Utensils, 
  Camera,
  Mountain,
  Palmtree,
  Ship,
  Train,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  Phone
} from "lucide-react";
import { useImage } from "react-image";

function Hero() {
  const { src } = useImage({ srcList: [background, img1, img2, img3, img4, dest1, dest2, dest3], useSuspense: true });
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0 h-full">
        <Suspense fallback={<div className="w-full h-full bg-gray-300 animate-pulse"></div>}>
          {src && (
            <img
              src={src}
              alt="Travel Background"
              className="w-full h-full object-cover "
            />
          )}
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 lg:py-32 text-center">
        <div className="flex flex-col items-center gap-9 text-white">
          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[50px] animate-fade-in">
            <span className="text-orange-400 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Discover Your Next Adventure with AI
            </span>
            <br />
            <span className="mt-2 block">
              Personalized Itineraries at Your Fingertips
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl animate-fade-in-up">
            Your personal travel companion powered by AI, creating custom
            itineraries tailored to your interests and budget. Experience travel
            planning reimagined.
          </p>

          <Link to="/create-trip">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg animate-bounce-subtle">
              Get Started, It's Free
            </Button>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full max-w-4xl">
            <FeatureCard
              icon={<Compass className="w-6 h-6" />}
              title="Smart Routes"
              description="AI-optimized travel routes"
            />
            <FeatureCard
              icon={<Map className="w-6 h-6" />}
              title="Custom Maps"
              description="Personalized travel maps"
            />
            <FeatureCard
              icon={<Calendar className="w-6 h-6" />}
              title="Easy Planning"
              description="Effortless scheduling"
            />
            <FeatureCard
              icon={<Globe2 className="w-6 h-6" />}
              title="Global Coverage"
              description="Worldwide destinations"
            />
          </div>
        </div>
      </div>
    </div>

      {/* Adventure Types Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Adventure Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Suspense fallback={<div className="w-12 h-12 bg-gray-500 animate-pulse"></div>}>
              <AdventureCard icon={<Mountain className="w-12 h-12" />} title="Mountain Expeditions" image={img1} />
              <AdventureCard icon={<Palmtree className="w-12 h-12" />} title="Tropical Getaways" image={img2} />
              <AdventureCard icon={<Ship className="w-12 h-12" />} title="Ocean Cruises" image={img3} />
              <AdventureCard icon={<Train className="w-12 h-12" />} title="Scenic Railways" image={img4} />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Destination Highlights Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold aria-label text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Suspense fallback={<div className="w-full h-64 bg-gray-300 animate-pulse"></div>}>
              <DestinationCard image={dest1} title="Paris, France" description="Experience the city of love with AI-crafted romantic itineraries" price="From $1,299" rating={4.8} />
              <DestinationCard image={dest2} title="Tokyo, Japan" description="Discover the perfect blend of tradition and modern culture" price="From $1,499" rating={4.9} />
              <DestinationCard image={dest3} title="New York, USA" description="Navigate the Big Apple with insider recommendations" price="From $999" rating={4.7} />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Travel Experience Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Travel Experience</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Suspense fallback={<div className="w-full h-16 bg-gray-300 animate-pulse"></div>}>
              <ExperienceCard icon={<Plane className="w-8 h-8" />} title="Flight Booking" description="Best deals on flights" />
              <ExperienceCard icon={<Hotel className="w-8 h-8" />} title="Accommodations" description="Curated stays for every budget" />
              <ExperienceCard icon={<Utensils className="w-8 h-8" />} title="Dining Guide" description="Local cuisine recommendations" />
              <ExperienceCard icon={<Camera className="w-8 h-8" />} title="Activities" description="Must-see attractions and hidden gems" />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-orange-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>
          <Suspense fallback={<div className="w-full h-24 bg-gray-300 animate-pulse"></div>}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" name="Sarah Mitchell" location="London, UK" text="The AI-powered itinerary was spot on! Saved me hours of planning and discovered hidden gems I wouldn't have found otherwise." />
              <TestimonialCard image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" name="David Chen" location="Singapore" text="Incredible experience from start to finish. The personalized recommendations made our family trip to Japan unforgettable." />
              <TestimonialCard image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" name="Emma Rodriguez" location="Barcelona, Spain" text="As a solo traveler, this platform gave me the confidence to explore new destinations with perfectly planned itineraries." />
            </div>
          </Suspense>
        </div>
      </div>  

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">About Us</h3>
              <p className="text-gray-400">
                Revolutionizing travel planning with AI-powered personalized itineraries and expert recommendations.
              </p>
              <div className="flex space-x-4">
                <SocialIcon icon={<Instagram className="w-5 h-5" />} />
                <SocialIcon icon={<Facebook className="w-5 h-5" />} />
                <SocialIcon icon={<Twitter className="w-5 h-5" />} />
                <SocialIcon icon={<Youtube className="w-5 h-5" />} />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <FooterLink text="About Us" />
                <FooterLink text="Destinations" />
                <FooterLink text="Travel Guides" />
                <FooterLink text="FAQs" />
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <FooterLink text="Help Center" />
                <FooterLink text="Terms of Service" />
                <FooterLink text="Privacy Policy" />
                <FooterLink text="Contact Us" />
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span>pratikjetani1407@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TravelAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-all">
      <div className="text-orange-400 mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-200 text-sm">{description}</p>
    </div>
  );
}

function AdventureCard({ icon, title, image }) {
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <div className="text-white mb-2">{icon}</div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
}



function DestinationCard({ image, title, description, price, rating }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after first load
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 bg-white"
    >
      <div className="relative">
        {isVisible && (
          <LazyLoadImage 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover" 
          
        />
        )}
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-orange-500">
          ★ {rating}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-semibold">{price}</span>
          <button className="text-sm px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}



function ExperienceCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 hover:bg-orange-50 rounded-xl transition-colors">
      <div className="text-orange-500 mb-4 transform hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function TestimonialCard({ image, name, location, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{text}"</p>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
      {icon}
    </a>
  );
}

function FooterLink({ text }) {
  return (
    <li>
      <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
        {text}
      </a>
    </li>
  );
}

export default Hero;