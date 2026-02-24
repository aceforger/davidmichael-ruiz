import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen, FaQuoteLeft, FaAmazon, FaApple, FaGooglePlay, FaBook } from 'react-icons/fa';

const mockBooks = [
  { 
    id: '1', 
    title: 'The Heart of Tesfa', 
    author: 'DAVIN MICHAEL RUIZ', 
    image: '/images/tesfa.png', 
    description: 'In a world forged by ancient powers, where good and evil clash in both the hearts of men and mythical creatures, the war for the soul of creation intensifies. As the lines between good and evil blur, unlikely heroes rise. Grrrid, an orc born into an evil legacy, battles with the transformation of his heart, while Always, the daughter of the Opposer, seeks redemption in her final moments. The child Tesfa, born of human and fairy lineage, embodies the hope for a new world-one free from the ancient curses that have haunted both mortal and magical realms.Jerim, alongside warriors from all races, faces the ultimate test of leadership as armies of orcs, goblins, elves, and humans converge in a final, desperate battle. Ancient prophecies unfold as heroes confront their deepest fears, and the fate of their world rests on the choices of those who dare to fight for it. Can hearts born of evil find redemption? Or is the path to righteousness reserved only for the chosen few? In the thrilling conclusion of "The Heart Trilogy," the balance between light and darkness teeters on the edge, and the final battle will decide the future of all creation.', 
    postDate: 'August 8, 2025',
    quote: '"A mesmerizing journey through forgotten histories. Lane masterfully blends the supernatural with profound cultural insights." - Cultural Reviews',
    relatedTopics: [
      { title: 'DAVID MICHAEL RUIZ', link: 'More Information >' },
    ],
    purchaseLinks: {
      amazon: 'https://www.amazon.com/dp/1234567890',
      appleBooks: 'https://books.apple.com/book/id123456789',
      googlePlay: 'https://play.google.com/store/books/details?id=1234567890',
      barnesAndNoble: 'https://www.barnesandnoble.com/w/1234567890',
      kobo: 'https://www.kobo.com/us/en/ebook/1234567890'
    }
  },
  { 
    id: '2', 
    title: 'The Heart of Jerim', 
    author: 'DAVIN MICHAEL RUIZ', 
    image: '/images/jerim.png', 
    description: 'In a world forged by ancient powers, where good and evil clash in both the hearts of men and mythical creatures, the war for the soul of creation intensifies. As the lines between good and evil blur, unlikely heroes rise. Grrrid, an orc born into an evil legacy, battles with the transformation of his heart, while Always, the daughter of the Opposer, seeks redemption in her final moments. The child Tesfa, born of human and fairy lineage, embodies the hope for a new world—one free from the ancient curses that have haunted both mortal and magical realms. Jerim, alongside warriors from all races, faces the ultimate test of leadership as armies of orcs, goblins, elves, and humans converge in a final, desperate battle. Ancient prophecies unfold as heroes confront their deepest fears, and the fate of their world rests on the choices of those who dare to fight for it. Can hearts born of evil find redemption? Or is the path to righteousness reserved only for the chosen few? In the thrilling conclusion of The Heart Trilogy, the balance between light and darkness teeters on the edge, and the final battle will decide the future of all creation.', 
    postDate: 'August 8, 2025',
    quote: '"I couldn\'t put it down! The most practical screenwriting guide I\'ve encountered in years." - Film Monthly',
    relatedTopics: [
      { title: 'DAVIN MICHAEL RUIZ', link: 'More Information >' },
    ],
    purchaseLinks: {
      amazon: 'https://www.amazon.com/dp/1234567891',
      appleBooks: 'https://books.apple.com/book/id123456791',
      googlePlay: 'https://play.google.com/store/books/details?id=1234567891',
      barnesAndNoble: 'https://www.barnesandnoble.com/w/1234567891',
      kobo: 'https://www.kobo.com/us/en/ebook/1234567891'
    }
  },
  { 
    id: '3', 
    title: 'The Heart of Always', 
    author: 'DAVIN MICHAEL RUIZ', 
    image: '/images/always.png', 
    description: 'In The Heart of Always, the second book of The Heart Trilogy, the balance of power between good and evil teeters on the edge. The Opposer, a powerful entity stripped of his name and body, has risen once more, determined to reshape the world in his image. At the heart of this battle is Always, the daughter of the Opposer, a woman as feared as she is vulnerable. As Always recovers from a near-fatal wound, Bredwell, a Wereman warrior, takes her under his protection. In the shadow of the Mountains of Fire, he must decide whether to follow his duty to his clan or his growing feelings for the enigmatic Always. But danger lurks in every corner. The molten rivers of the mountains hide the key to an ancient weapon-one that can end Always, life and turn the tide of the war. As armies gather, mythical creatures awaken, and dark forces prepare for an all-out assault, love, loyalty, and the strength of the heart will be tested in ways never before imagined. Can Bredwell and his people survive the storm that is coming? Or will the world fall under the reign of the Opposer once and for all?Dive into a world of epic battles, ancient magic, and unforgettable characters in *The Heart of Always*, where the line between love and power is drawn in fire.', 
    postDate: 'August 8, 2025',
    quote: '"I couldn\'t put it down! The most practical screenwriting guide I\'ve encountered in years." - Film Monthly',
    relatedTopics: [
      { title: 'DAVIN MICHAEL RUIZ', link: 'More Information >' },
    ],
    purchaseLinks: {
      amazon: 'https://www.amazon.com/dp/1234567892',
      appleBooks: 'https://books.apple.com/book/id123456792',
      googlePlay: 'https://play.google.com/store/books/details?id=1234567892',
      barnesAndNoble: 'https://www.barnesandnoble.com/w/1234567892',
      kobo: 'https://www.kobo.com/us/en/ebook/1234567892'
    }
  }
];

function BookNewsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 700));
        const foundBook = mockBooks.find(b => b.id === id);
        
        if (foundBook) {
          setBook(foundBook);
        } else {
          setError('Book not found');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch book details');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Truncate description for preview
  const getPreviewDescription = (text) => {
    if (text.length > 300) {
      return text.substring(0, 300) + '...';
    }
    return text;
  };

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-white text-xl">Loading book details...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-white text-xl">{error}</div>
    </div>
  );
  
  if (!book) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-white text-xl">Book not found</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-teal-300 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-black-300 hover:text-gray-600 mb-4 transition-colors duration-300 text-sm mt-5 mb-15"
        >
          <FaArrowLeft className="mr-2 text-xs" />
          <span>Back to Books</span>
        </button>

        {/* Book Card - More Compact */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Book Header - Smaller */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-1 font-serif">{book.title}</h1>
            <p className="text-amber-200 text-sm mb-0.5">by {book.author}</p>
            <p className="text-amber-300 text-xs">{book.postDate}</p>
          </div>

          {/* Book Content - More Compact */}
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Book Cover - Smaller */}
              <div className="md:w-1/4">
                <div className="relative group">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-auto rounded-lg shadow-md border-2 border-blue-100"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="md:w-3/4">
                <h2 className="text-lg font-bold text-gray-800 mb-2 font-serif">Synopsis</h2>
                
                {/* Description with toggle */}
                <div className="text-gray-700 text-sm leading-relaxed mb-3">
                  {showFullDescription ? book.description : getPreviewDescription(book.description)}
                </div>
                
                {book.description.length > 300 && (
                  <button 
                    onClick={toggleDescription}
                    className="text-blue-600 hover:text-blue-800 text-xs font-medium mb-3"
                  >
                    {showFullDescription ? 'Show less' : 'Read more'}
                  </button>
                )}

                {/* Review Quote - Smaller */}
                <div className="relative bg-amber-50 p-3 rounded-lg border-l-3 border-amber-500 mb-3">
                  <FaQuoteLeft className="text-blue-300 text-lg absolute top-2 left-2" />
                  <p className="text-gray-700 italic text-xs pl-6 pr-2">{book.quote}</p>
                </div>

                {/* Purchase Links - Compact Grid */}
                {book.purchaseLinks && (
                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-gray-800 mb-2 font-serif">Buy Now</h3>
                    <div className="grid grid-cols-3 gap-1.5">
                      {book.purchaseLinks.amazon && (
                        <a 
                          href={book.purchaseLinks.amazon}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 bg-[#FF9900] hover:bg-[#FF9900]/80 text-white py-1.5 px-2 rounded text-xs font-medium transition-colors"
                        >
                          <FaAmazon className="text-xs" />
                          <span className="hidden sm:inline">Amazon</span>
                        </a>
                      )}
                      
                      {book.purchaseLinks.appleBooks && (
                        <a 
                          href={book.purchaseLinks.appleBooks}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 bg-gray-800 hover:bg-gray-700 text-white py-1.5 px-2 rounded text-xs font-medium transition-colors"
                        >
                          <FaApple className="text-xs" />
                          <span className="hidden sm:inline">Apple</span>
                        </a>
                      )}
                      
                      {book.purchaseLinks.googlePlay && (
                        <a 
                          href={book.purchaseLinks.googlePlay}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 bg-[#3bccff] hover:bg-[#3bccff]/80 text-white py-1.5 px-2 rounded text-xs font-medium transition-colors"
                        >
                          <FaGooglePlay className="text-xs" />
                          <span className="hidden sm:inline">Google</span>
                        </a>
                      )}
                      
                      {book.purchaseLinks.barnesAndNoble && (
                        <a 
                          href={book.purchaseLinks.barnesAndNoble}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 bg-[#007a6b] hover:bg-[#007a6b]/80 text-white py-1.5 px-2 rounded text-xs font-medium transition-colors"
                        >
                          <FaBook className="text-xs" />
                          <span className="hidden sm:inline">B&N</span>
                        </a>
                      )}
                      
                      {book.purchaseLinks.kobo && (
                        <a 
                          href={book.purchaseLinks.kobo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 bg-[#cc0000] hover:bg-[#cc0000]/80 text-white py-1.5 px-2 rounded text-xs font-medium transition-colors"
                        >
                          <FaBookOpen className="text-xs" />
                          <span className="hidden sm:inline">Kobo</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* About Author Section - More Compact */}
            <div className="mt-4 bg-gray-50 p-3 rounded-lg">
              <h3 className="text-sm font-bold text-gray-800 mb-2 font-serif border-b border-blue-200 pb-1">Author</h3>
              <div className="grid grid-cols-1 gap-2">
                {book.relatedTopics.map((topic, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex items-center justify-between p-2 hover:bg-blue-50 rounded transition-colors">
                      <h4 className="font-medium text-gray-800 text-sm">{topic.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNewsDetails;