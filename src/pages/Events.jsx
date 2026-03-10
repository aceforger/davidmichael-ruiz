import React, { useState, useRef } from 'react';
import { 
  FaCalendarAlt, FaMapMarkerAlt, FaRegCalendarCheck, 
  FaTimes, FaGlobeEurope, FaChevronLeft, FaChevronRight, 
  FaExpand, FaBookOpen, FaPlay, FaPause, FaVolumeUp, 
  FaVolumeMute, FaExpandArrowsAlt, FaCompressArrowsAlt,
  FaUserFriends, FaMicrophoneAlt, FaCamera, FaStar
} from 'react-icons/fa';

// Frankfurt event video
const frankfurtVideo = {
  src: "/images/bookfair.mp4", // Update this path to your video file
  poster: "/images/cover.jpg", // Optional poster image
  title: "Book Fair - David Michael Ruiz Author Appearance"
};

const eventsData = [
  {
    id: 1,
    title: "Book Fair - David Michael Ruiz Book Signing",
    date: "October 15-19, 2025",
    location: "Frankfurter Buchmesse, Frankfurt, Germany",
    venue: "Hall 5.0, Stand B46, Ludwig-Erhard-Anlage 1, 60327 Frankfurt am Main, Germany",
    description: "Join acclaimed author David Michael Ruiz at the Frankfurter Buchmesse 2025, the world's largest publishing trade fair. David will be signing copies of his latest epic fantasy novel, participating in panel discussions on modern fantasy literature, and meeting readers from around the globe.",
    status: "upcoming",
    highlights: [
      "Book signing sessions - Bring your copies!",
      "Exclusive reading from 'The Heart of Jerim'",
      "Panel Discussion: 'The Future of Epic Fantasy'",
      "Meet & Greet with David Michael Ruiz",
      "Limited edition signed bookplates",
      "Discussion on world-building in fantasy",
      "Networking with international publishers"
    ]
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    document.body.style.overflow = 'auto';
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 relative inline-block">
            <span className="relative">
              Events & Appearances
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join David Michael Ruiz at literary events around the world
          </p>
        </div>
        
        {/* Featured Event */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl text-white shadow-lg">
              <FaStar className="text-xl" />
            </div>
            <h3 className="text-2xl font-serif text-gray-800">Featured Event</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {eventsData.map((event) => (
              <div 
                key={event.id}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-gray-100"
                onClick={() => openModal(event)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Video Section */}
                  <div className="lg:col-span-1 relative h-80 lg:h-full min-h-[300px] overflow-hidden bg-black">
                    <video 
                      ref={videoRef}
                      src={frankfurtVideo.src}
                      poster={frankfurtVideo.poster}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Video Title */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium opacity-90">{frankfurtVideo.title}</p>
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <FaPlay className="text-white text-2xl ml-1" />
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                      1:27
                    </div>
                  </div>
                  
                  {/* Event Details */}
                  <div className="lg:col-span-2 p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                      <div className="flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        <FaCalendarAlt className="mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                        <FaMapMarkerAlt className="mr-2" />
                        Frankfurt, Germany
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start text-gray-600">
                        <FaMapMarkerAlt className="mr-3 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base">{event.venue}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">{event.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-blue-600 font-medium hover:text-blue-700 duration-300 flex items-center group-hover:translate-x-2 transition-transform">
                        View Full Details <span className="ml-2">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Event Modal */}
        {isModalOpen && selectedEvent && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto w-full">
              <div className="relative">
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:scale-110 transition-transform"
                >
                  <FaTimes />
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 md:p-8">
                  {/* Video Section */}
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
                      <video 
                        ref={videoRef}
                        src={frankfurtVideo.src}
                        poster={frankfurtVideo.poster}
                        className="w-full h-full object-cover"
                        muted={isVideoMuted}
                        loop
                        playsInline
                      />
                      
                      {/* Custom Video Controls */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={toggleVideoPlay}
                              className="hover:text-blue-400 transition-colors"
                            >
                              {isVideoPlaying ? <FaPause /> : <FaPlay />}
                            </button>
                            <button 
                              onClick={toggleVideoMute}
                              className="hover:text-blue-400 transition-colors"
                            >
                              {isVideoMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={toggleFullscreen}
                              className="hover:text-blue-400 transition-colors"
                            >
                              {isFullscreen ? <FaCompressArrowsAlt /> : <FaExpandArrowsAlt />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-500 text-center">
                      Watch David Michael Ruiz discuss his upcoming appearance at the Frankfurt Book Fair 2025
                    </p>
                  </div>
                  
                  {/* Event Details Section */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center text-blue-600 font-medium mb-4 bg-blue-50 p-3 rounded-xl">
                        <FaCalendarAlt className="mr-3" />
                        {selectedEvent.date}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 leading-tight">
                        {selectedEvent.title}
                      </h3>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-start text-gray-700 bg-gray-50 rounded-xl p-4">
                          <FaMapMarkerAlt className="mr-4 text-blue-500 text-xl mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-gray-900 mb-1">Location</div>
                            <div className="text-gray-600 text-sm">{selectedEvent.venue}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-6">{selectedEvent.description}</p>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                        <h4 className="text-xl font-medium text-blue-800 mb-4 flex items-center">
                          <FaRegCalendarCheck className="mr-2" />
                          Event Highlights
                        </h4>
                        <ul className="grid grid-cols-1 gap-3">
                          {selectedEvent.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                              <span className="text-sm md:text-base">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;