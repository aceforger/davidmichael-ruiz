import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const BookTrailer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  
  const playTrailer = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsPlaying(true);
  };
  
  const closeTrailer = () => {
    setIsPlaying(false);
    setCurrentVideo(null);
  };
  
  return (
    <section id="trailer" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-16 relative">
          <span className="relative inline-block">
            Book Trailers
            <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

          {/* Jerim */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <div className="relative">
              <div 
                className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
                onClick={() => playTrailer('/images/jerim.mp4')}
              >
                <img 
                  src="/images/jerim.png" 
                  alt="The Heart of Jerim" 
                  className="w-full h-[50vh] object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 p-6 rounded-full transform transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-medium">Watch the Trailer</p>
                  <p className="text-sm opacity-90">1:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">The Heart of Jerim</h3>
              <p className="text-gray-600 mb-4">Now available</p>
              <button 
                onClick={() => playTrailer('/images/jerim.mp4')}
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Trailer
              </button>
            </div>
          </div>

          {/* Always */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <div className="relative">
              <div 
                className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
                onClick={() => playTrailer('/images/always.mp4')}
              >
                <img 
                  src="/images/always.png" 
                  alt="The Heart of Always" 
                  className="w-full h-[50vh] object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 p-6 rounded-full transform transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-medium">Watch the Trailer</p>
                  <p className="text-sm opacity-90">1:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">The Heart of Always</h3>
              <p className="text-gray-600 mb-4">Now available</p>
              <button 
                onClick={() => playTrailer('/images/always.mp4')}
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Trailer
              </button>
            </div>
          </div>

          {/* Tesfa */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <div className="relative">
              <div 
                className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
                onClick={() => playTrailer('/images/tesfa.mp4')}
              >
                <img 
                  src="/images/tesfa.png" 
                  alt="Tesfa" 
                  className="w-full h-[50vh] object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 p-6 rounded-full transform transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-medium">Watch the Trailer</p>
                  <p className="text-sm opacity-90">1:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">The Heart of Tesfa</h3>
              <p className="text-gray-600 mb-4">Now available in stores and online</p>
              <button 
                onClick={() => playTrailer('/images/tesfa.mp4')}
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Trailer
              </button>
            </div>
          </div>
          
          

          {/* Peter */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <div className="relative">
              <div 
                className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
                onClick={() => playTrailer('/images/soon.mp4')}
              >
                <img 
                  src="/images/peter.png" 
                  alt="The Hand of Peter" 
                  className="w-full h-[50vh] object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 p-6 rounded-full transform transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-medium">Coming Soon</p>
                  <p className="text-sm opacity-90"></p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">The Hand of Peter</h3>
              <p className="text-gray-600 mb-4">Coming Soon</p>
              <button 
                onClick={() => playTrailer('/images/soon.mp4')}
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Comming Soon
              </button>
            </div>
          </div>


          {/* Angels */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <div className="relative">
              <div 
                className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
                onClick={() => playTrailer('/images/soon.mp4')}
              >
                <img 
                  src="/images/angels.png" 
                  alt="The Hand of Peter" 
                  className="w-full h-[50vh] object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 p-6 rounded-full transform transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-medium">Coming Soon</p>
                  <p className="text-sm opacity-90"></p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">Out of Africa</h3>
              <p className="text-gray-600 mb-4">Coming Soon</p>
              <button 
                onClick={() => playTrailer('/images/soon.mp4')}
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Comming Soon
              </button>
            </div>
          </div>

          {/* Africa */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <div className="relative">
              <div 
                className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
                onClick={() => playTrailer('/images/soon.mp4')}
              >
                <img 
                  src="/images/africa.png" 
                  alt="The Hand of Peter" 
                  className="w-full h-[50vh] object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 p-6 rounded-full transform transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-medium">Coming Soon</p>
                  <p className="text-sm opacity-90"></p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">Out of Africa</h3>
              <p className="text-gray-600 mb-4">Coming Soon</p>
              <button 
                onClick={() => playTrailer('/images/soon.mp4')}
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Comming Soon
              </button>
            </div>
          </div>

        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-serif text-gray-800 mb-6 text-center">The Heart Trilogy</h3>
          <p className="text-lg leading-relaxed text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Embark on an epic journey through a world where ancient powers clash, 
            unlikely heroes rise, and the fate of all creation hangs in the balance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Heart of Jerim */}
            <div className="flex flex-col h-full">
              <h4 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="font-serif">The Heart of Jerim</span>
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                In the Third Kingdom, young Jerim lives a carefree life, more interested in explosions and mischief 
                than in his family's prestigious legacy as master weapon makers. Orphaned at a young age, he knows 
                little of his parents, Jero and Luminda, who mysteriously disappeared, leaving him in the care of 
                Fulcar, a strict but kind mentor. As Jerim faces his final test to join the Weapons Guild, he is 
                thrust into a conflict that threatens the very fabric of his world. The malevolent Prince George, 
                aided by dark forces, seeks to claim the throne through manipulation, deceit, and ancient magic. 
                But in the desert beyond, an uprising is brewing. Jerim's fate becomes tied to the struggle for 
                freedom as he unravels the truth about his parents and the role they played in the rebellion against 
                the prince. With unlikely allies, mysterious magic, and a new sense of purpose, Jerim must rise from 
                a reluctant youth to the hero his people need. The heart of a kingdom rests on the courage of one 
                young man. Can Jerim embrace his destiny before darkness consumes the land?
              </p>
            </div>
            
            {/* The Heart of Always */}
            <div className="flex flex-col h-full">
              <h4 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="font-serif">The Heart of Always</span>
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                In The Heart of Always, the second book of The Heart Trilogy, the balance of power between good 
                and evil teeters on the edge. The Opposer, a powerful entity stripped of his name and body, has 
                risen once more, determined to reshape the world in his image. At the heart of this battle is 
                Always, the daughter of the Opposer, a woman as feared as she is vulnerable. As Always recovers 
                from a near-fatal wound, Bredwell, a Wereman warrior, takes her under his protection. In the shadow 
                of the Mountains of Fire, he must decide whether to follow his duty to his clan or his growing 
                feelings for the enigmatic Always. But danger lurks in every corner. The molten rivers of the 
                mountains hide the key to an ancient weapon—one that can end Always' life and turn the tide of the 
                war. As armies gather, mythical creatures awaken, and dark forces prepare for an all-out assault, 
                love, loyalty, and the strength of the heart will be tested in ways never before imagined. Can 
                Bredwell and his people survive the storm that is coming? Or will the world fall under the reign of 
                the Opposer once and for all? Dive into a world of epic battles, ancient magic, and unforgettable 
                characters in The Heart of Always, where the line between love and power is drawn in fire.
              </p>
            </div>
            
            {/* The Heart of Tesfa */}
            <div className="flex flex-col h-full">
              <h4 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="font-serif">The Heart of Tesfa</span>
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                In a world forged by ancient powers, where good and evil clash in both the hearts of men and 
                mythical creatures, the war for the soul of creation intensifies. As the lines between good and 
                evil blur, unlikely heroes rise. Grrrid, an orc born into an evil legacy, battles with the 
                transformation of his heart, while Always, the daughter of the Opposer, seeks redemption in her 
                final moments. The child Tesfa, born of human and fairy lineage, embodies the hope for a new 
                world—one free from the ancient curses that have haunted both mortal and magical realms. Jerim, 
                alongside warriors from all races, faces the ultimate test of leadership as armies of orcs, goblins, 
                elves, and humans converge in a final, desperate battle. Ancient prophecies unfold as heroes 
                confront their deepest fears, and the fate of their world rests on the choices of those who dare to 
                fight for it. Can hearts born of evil find redemption? Or is the path to righteousness reserved only 
                for the chosen few? In the thrilling conclusion of The Heart Trilogy, the balance between light and 
                darkness teeters on the edge, and the final battle will decide the future of all creation.
              </p>
            </div>
          </div>
          
          {/* Optional: Add a call to action */}
          <div className="text-center mt-8 pt-4 border-t border-gray-200">
            <p className="text-gray-500 italic">
              The complete epic fantasy series — where destiny is forged in the heart
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mt-10">
          <h3 className="text-3xl font-serif text-gray-800 mb-6 text-center">The Soul Trilogy</h3>
          <p className="text-lg leading-relaxed text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            A sweeping saga of faith, family, and the enduring power of the human spirit. 
            It follow generations whose lives are woven together by friendship, tragedy, and an unshakeable 
            devotion to something greater than themselves.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Heart of Jerim */}
            <div className="flex flex-col h-full">
              <h4 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="font-serif">The Hand of Peter</span>
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                It follows the life of Pedro, a young boy born in poverty in a small town in Nicaragua. His father is killed the day he is born allowing for his life to progress without the influence of the ‘macho’ culture of his father. He lives a happy life with his mother, oldest sister, and his two brothers. He establishes a close relationship to the Village Catholic Priest. 


                His mother is introduced to a friend of the priest, an electrical engineer with severe depression. They become a family. A few years later a great tragedy befalls the family. The priest is killed; Pedro’s father is injured. Pedro is severely injured, and the injury will follow him throughout is life. But through this event he is joined with the assailant’s son, and they become lifelong friends who become priest. 


                Their journey takes them through times of torture for their faith eventually leading them to Rome and the pinnacle of the Catholic Church. But the journey not only includes tragedy, but closeness to family, deep religious growth and defense of their faith. They touch so many lives. The family is the key to the strength and faith of Pedro and his companion, Pancho.
              </p>
            </div>
            
            {/* The Heart of Always */}
            <div className="flex flex-col h-full">
              <h4 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="font-serif">Touched by Angels</span>
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                A journey traveled by two women born on the same day and live parallel lives. One born in Nicaragua and the other born in Texas. They are both touched by Pedro and Pancho. Although Pancho has become a very strict moralist, he understands the real life of people, their sins, their troubles, their challenges. 


                These women come to know each other through Peter, now the Pope. Their journey is just as hard, even if in different ways. It explores the reality of living life, having faith and the responsibility that faith carries with it. 


                It explores love, not only in a romantic way, but in life and family. It explores living a religious life even in the face of modernity.
              </p>
            </div>
            
            {/* The Heart of Tesfa */}
            <div className="flex flex-col h-full">
              <h4 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="font-serif">Out of Africa</span>
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                It follows the life of Franklin, a boy brought up in an orphanage in Congo. He is raise by deeply religious and loving nuns, both American and African. They motivate him to a religious life. He is beaten and tortured as a young boy and as a young priest that leads the heads of the religious order to take him out of Africa and put him in Rome. 


                There he meets Pedro, Pancho and the Rodriguez family and is assimilated into the family fully. When Pedro dies, Franklin is elected as Pope. But even as Pope he faces danger for his staunch defense of the Catholic Church and his faith and love of God. 


                Finally, in an assassination attempt he is forced to abdicate and lives out the rest of his life in Texas with his family. Even still he influences many in his final years with a great surprise that leaves him with the knowledge that he is ready to see God.
              </p>
            </div>
          </div>
          
          {/* Optional: Add a call to action */}
          <div className="text-center mt-8 pt-4 border-t border-gray-200">
            <p className="text-gray-500 italic">
              A journey of faith and family — where the soul finds its purpose
            </p>
          </div>
        </div>
        
        {/* Video Modal */}
        {isPlaying && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <button 
              onClick={closeTrailer}
              className="absolute top-8 right-8 text-white text-3xl hover:text-orange-400 transition-colors duration-300 z-10"
            >
              <FaTimes />
            </button>
            
            <div className="relative w-full max-w-4xl aspect-video">
              <video 
                className="w-full h-full rounded-lg"
                controls
                autoPlay
                playsInline
              >
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookTrailer;