import React, { useEffect, useRef } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

// Import components
import NavigationBar from './NavigationBar';
import BookTrailer from './BookTrailer';
import ImageGallery from './ImageGallery';
import Events from './Events';
import PressRelease from './PressRelease';

function AboutMe() {
  const navigate = useNavigate();
  const location = useLocation();
  const aboutRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="bg-white">
      <NavigationBar />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center pt-16">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Background image */}
        <div className="absolute inset-0 bg-black mt-10">
          <img 
            src="/images/home.png" 
            alt="David Michael Ruiz" 
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Centered content */}
        <div className="relative z-20 text-center text-white px-5 max-w-4xl">
          {/* Optional button */}
        </div>
      </section>

      
      {/* About Section */}
      <div id="about" ref={aboutRef} className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 relative inline-block">
            <span className="relative">
              About The Author
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Author, Educator, and Literary Visionary bridging timeless wisdom with contemporary storytelling
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-28">
          <div className="relative mt-20">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/images/david.png" 
                alt="David Michael Ruiz" 
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-3/4 h-3/4 border-4 border-orange-400 rounded-xl"></div>
          </div>
          
          <div className="pt-0">
            <h2 className="text-3xl font-serif text-gray-800 mb-8">
              The Story Behind the Words
            </h2>
            
            <div className="space-y-3">
              <p className="text-lg leading-relaxed text-gray-600">
              Architect of Worlds
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
               David Michael Ruiz is a visionary storyteller dedicated to the art of high-stakes world-building. Specializing in Epic Fantasy and speculative fiction, Ruiz has carved out a distinct space in the literary landscape with narratives that challenge the boundaries of imagination. His work is characterized by intricate lore, high-tension conflict, and characters who find their strength at the intersection of duty and desperation.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                The Art of the Epic
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Ruiz’s writing is defined by its atmospheric depth and structural complexity. In his standout work, The Heart of Jerim, he demonstrates a keen ability to construct expansive, living worlds that feel both ancient and immediate. His storytelling style focuses on:
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                The Heroic Internal: Exploring the psychological weight of destiny on the individual.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Systemic Lore: Designing unique magical or societal structures that drive the plot.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Cinematic Pacing: Balancing grand, sweeping action with intimate, character-driven moments.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Philosophical Foundations
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                At the core of Ruiz’s bibliography is a fascination with the "Trial"—the moment a character is forced to outgrow their former self to survive a changing world. Whether navigating the halls of the Weapons Guild or the far reaches of speculative futures, his protagonists are defined not by their powers, but by their choices. This philosophical grounding elevates his work from standard genre fiction to a profound exploration of human (and superhuman) resilience.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                A Growing Literary Footprint
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                With a library of work available globally on Amazon, David Michael Ruiz has built a loyal following of readers who crave immersive escapism paired with intellectual substance. As he continues to expand the Heart saga and explore new narrative horizons, Ruiz remains a vital voice for those seeking stories that are as vast as the stars and as intimate as the human heart.
              </p>
            </div>
          </div>
        </div>
        
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 max-w-screen lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-blue-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Published Works</h3>
            <p className="text-gray-600">6 books</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Education</h3>
            <p className="text-gray-600">Webber-Douglas Academy of Dramatic Art in London, BA in English and Theatre Arts from Catawba College</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Writing Style</h3>
            <p className="text-gray-600">Literary fiction with historical depth</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Awards</h3>
            <p className="text-gray-600">3-time Booker Prize nominee</p>
          </div>
        </div> */}
      </div>

      {/* Press Release Section */}
      {/* <PressRelease /> */}

      {/* Book Trailer Section */}
      <BookTrailer />

      {/* Events Section */}
      {/* <Events /> */}

      {/* Gallery Section */}
      {/* <ImageGallery /> */}

      {/* Floating CTA Button */}
      <button 
        onClick={() => navigate('/home')}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 z-50"
      >
        <FaBookOpen size={18} />
        <span>Explore His Work</span>
      </button>
    </div>
  );
}

export default AboutMe;