import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaAmazon, 
  FaApple, 
  FaBook,
  FaBookOpen,
  FaStar,
  FaBookReader
} from 'react-icons/fa';

// Mock eBook data
const mockEBooks = [
  { 
    id: '1', 
    title: 'The Heart of Tesfa', 
    author: 'DAVIN MICHAEL RUIZ', 
    coverImage: '/images/tesfa.png', 
    description: 'In a world forged by ancient powers, where good and evil clash in both the hearts of men and mythical creatures, the war for the soul of creation intensifies. As the lines between good and evil blur, unlikely heroes rise. Grrrid, an orc born into an evil legacy, battles with the transformation of his heart, while Always, the daughter of the Opposer, seeks redemption in her final moments. The child Tesfa, born of human and fairy lineage, embodies the hope for a new world—one free from the ancient curses that have haunted both mortal and magical realms.',
    longDescription: 'In a world forged by ancient powers, where good and evil clash in both the hearts of men and mythical creatures, the war for the soul of creation intensifies. As the lines between good and evil blur, unlikely heroes rise. Grrrid, an orc born into an evil legacy, battles with the transformation of his heart, while Always, the daughter of the Opposer, seeks redemption in her final moments. The child Tesfa, born of human and fairy lineage, embodies the hope for a new world—one free from the ancient curses that have haunted both mortal and magical realms. Jerim, alongside warriors from all races, faces the ultimate test of leadership as armies of orcs, goblins, elves, and humans converge in a final, desperate battle. Ancient prophecies unfold as heroes confront their deepest fears, and the fate of their world rests on the choices of those who dare to fight for it. Can hearts born of evil find redemption? Or is the path to righteousness reserved only for the chosen few? In the thrilling conclusion of "The Heart Trilogy," the balance between light and darkness teeters on the edge, and the final battle will decide the future of all creation.',
    publishDate: 'August 8, 2025',
    isbn: '9798349539268',
    pages: 384,
    language: 'English',
    format: 'eBook (EPUB, PDF, MOBI)',
    fileSize: '4.2 MB',
    rating: 4.8,
    reviews: 124,
    genres: ['Fantasy', 'Adventure', 'Epic Fantasy'],
    purchaseLinks: {
      lehmanns: 'https://www.lehmanns.ch/shop/literatur/87242674-9798349539268-the-heart-of-tesfa',
      PChome: 'https://24h.pchome.com.tw/books/prod/DJBQ34-D900J49TT?srsltid=AfmBOorl3JeQYOWeNZWPrSMBsZiHjBw7kGB0bsondOHEi9hgR6auqzaX',
      kobo: 'https://www.kobo.com/ie/en/ebook/the-heart-of-tesfa?srsltid=AfmBOor1Vn1wEsVZMOZ2MM40Okif3PwvQEU128Z92oYSgjTDdXMDmdy-'
    },
    publisher: 'Dickson Lane Publishing'
  },
  { 
    id: '2', 
    title: 'The Heart of Jerim', 
    author: 'DAVIN MICHAEL RUIZ', 
    coverImage: '/images/jerim.png', 
    description: 'In a world forged by ancient powers, where good and evil clash in both the hearts of men and mythical creatures, the war for the soul of creation intensifies. As the lines between good and evil blur, unlikely heroes rise. Grrrid, an orc born into an evil legacy, battles with the transformation of his heart, while Always, the daughter of the Opposer, seeks redemption in her final moments.',
    longDescription: 'In a world forged by ancient powers, where good and evil clash in both the hearts of men and mythical creatures, the war for the soul of creation intensifies. As the lines between good and evil blur, unlikely heroes rise. Grrrid, an orc born into an evil legacy, battles with the transformation of his heart, while Always, the daughter of the Opposer, seeks redemption in her final moments. The child Tesfa, born of human and fairy lineage, embodies the hope for a new world—one free from the ancient curses that have haunted both mortal and magical realms. Jerim, alongside warriors from all races, faces the ultimate test of leadership as armies of orcs, goblins, elves, and humans converge in a final, desperate battle. Ancient prophecies unfold as heroes confront their deepest fears, and the fate of their world rests on the choices of those who dare to fight for it. In the thrilling conclusion of The Heart Trilogy, the balance between light and darkness teeters on the edge, and the final battle will decide the future of all creation.',
    publishDate: 'August 8, 2025',
    isbn: '9798349531453',
    pages: 412,
    language: 'English',
    format: 'eBook (EPUB, PDF, MOBI)',
    fileSize: '4.5 MB',
    rating: 4.7,
    reviews: 98,
    genres: ['Fantasy', 'Adventure', 'Epic Fantasy'],
    purchaseLinks: {
      booktopia: 'https://www.booktopia.com.au/the-heart-of-jerim-david-michael-ruiz/ebook/9798349531453.html?srsltid=AfmBOop6Y7PKggiQTSvHvXl5We4Td9Z7hQDtOrMXZNGc_AOz8H8JAijn',
      gandhi: 'https://www.gandhi.com.mx/the-heart-of-jerim-9798349531453/p?srsltid=AfmBOoohYdSQRpO-4SWbXwZQp1NvqETQ3GtU7bORRN23GYwQ_4AeaE5g',
      hugendubel: 'https://www.hugendubel.de/de/ebook_epub/david_michael_ruiz-the_heart_of_jerim-51517537-produkt-details.html?srsltid=AfmBOopWtxIX_R6218RfzQdV_4e1HNP5_R8xCgnZ_OXSaT2DTgnuKI85',
      kobo: 'https://www.kobo.com/my/en/ebook/the-heart-of-jerim?srsltid=AfmBOoq0rYdBIO-9xnWJaOu--T_ZinSXfQdu8UIdqPVFLHoa1FBdJQp4'
    },
    publisher: 'Dickson Lane Publishing'
  },
  { 
    id: '3', 
    title: 'The Heart of Always', 
    author: 'DAVIN MICHAEL RUIZ', 
    coverImage: '/images/always.png', 
    description: 'In The Heart of Always, the second book of The Heart Trilogy, the balance of power between good and evil teeters on the edge. The Opposer, a powerful entity stripped of his name and body, has risen once more, determined to reshape the world in his image.',
    longDescription: 'In The Heart of Always, the second book of The Heart Trilogy, the balance of power between good and evil teeters on the edge. The Opposer, a powerful entity stripped of his name and body, has risen once more, determined to reshape the world in his image. At the heart of this battle is Always, the daughter of the Opposer, a woman as feared as she is vulnerable. As Always recovers from a near-fatal wound, Bredwell, a Wereman warrior, takes her under his protection. In the shadow of the Mountains of Fire, he must decide whether to follow his duty to his clan or his growing feelings for the enigmatic Always. But danger lurks in every corner. The molten rivers of the mountains hide the key to an ancient weapon—one that can end Always, life and turn the tide of the war. As armies gather, mythical creatures awaken, and dark forces prepare for an all-out assault, love, loyalty, and the strength of the heart will be tested in ways never before imagined.',
    publishDate: 'August 8, 2025',
    isbn: '9798349539190',
    pages: 398,
    language: 'English',
    format: 'eBook (EPUB, PDF, MOBI)',
    fileSize: '4.3 MB',
    rating: 4.9,
    reviews: 156,
    genres: ['Fantasy', 'Adventure', 'Epic Fantasy'],
    purchaseLinks: {
      lehmanns: 'https://www.lehmanns.de/shop/literatur/87238765-9798349539190-the-heart-of-always',
      booktopia: 'https://www.booktopia.com.au/the-heart-of-always-david-michael-ruiz/ebook/9798349539190.html?srsltid=AfmBOoovjR4RFxCLY6t04crY6yV__Cov8RFpRAPh1AwBzwr0bMkQy8e2',
      bol: 'https://www.bol.com/nl/nl/p/the-heart-of-always/9300000237909436/',
      morawa: 'https://www.morawa.at/detail/ISBN-2244080795540/Ruiz-David-Michael/The-Heart-of-Always',
      kobo: 'https://www.kobo.com/fr/fr/ebook/the-heart-of-always?srsltid=AfmBOoq8fSlXz2GUXSrLK0H3t303iT2uY1AdGaar6WUyD06Oh5yGgIeR'
    },
    publisher: 'Dickson Lane Publishing'
  }
];

function EBookShop() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ebook, setEbook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchEbook = () => {
      setLoading(true);
      setTimeout(() => {
        const found = mockEBooks.find(book => book.id === id);
        setEbook(found || null);
        setLoading(false);
      }, 500);
    };

    if (id) {
      fetchEbook();
    } else {
      setLoading(false);
    }
  }, [id]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Truncate description for preview
  const getPreviewDescription = (text) => {
    if (text && text.length > 200) {
      return text.substring(0, 200) + '...';
    }
    return text;
  };

  // If no ID is provided, show all eBooks
  if (!id) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-teal-100 to-teal-300 py-6 px-3">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-300 hover:text-white mb-4 transition-colors text-sm"
          >
            <FaArrowLeft className="mr-1 text-xs" />
            <span>Back</span>
          </button>
          
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            eBook <span className="text-sky-400">Collection</span>
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {mockEBooks.map((book) => (
              <div 
                key={book.id}
                onClick={() => navigate(`/ebook/${book.id}`)}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-28 bg-gradient-to-r from-blue-50 to-sky-50 flex items-center justify-center p-2">
                  <img 
                    src={book.coverImage} 
                    alt={book.title}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-bold text-gray-800 mb-0.5 line-clamp-1">{book.title}</h3>
                  <p className="text-xs text-gray-600 mb-1 line-clamp-1">by {book.author}</p>
                  <div className="flex items-center mb-1">
                    <div className="flex text-yellow-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(book.rating) ? "text-yellow-400" : "text-gray-300"} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({book.reviews})</span>
                  </div>
                  <button className="w-full bg-sky-500 text-white py-1 rounded text-xs hover:bg-sky-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-white text-sm">Loading...</div>
      </div>
    );
  }

  if (!ebook) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-white text-sm">eBook not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-teal-300 py-4 px-3">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/home')}
          className="flex items-center text-black hover:text-gray mb-3 transition-colors text-sm mb-15 mt-10"
        >
          <FaArrowLeft className="mr-1 text-xs" />
          <span>Back to Home</span>
        </button>

        {/* Main eBook Card - Compact */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Cover Image */}
            <div className="md:w-1/4 bg-gradient-to-br from-blue-50 to-sky-50 p-4 flex items-center justify-center">
              <div className="relative group">
                <img 
                  src={ebook.coverImage} 
                  alt={ebook.title}
                  className="w-full max-w-[150px] h-auto object-contain rounded-md shadow"
                />
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:w-3/4 p-4">
              <div className="flex flex-wrap items-center gap-1 mb-1">
                {ebook.genres.slice(0, 2).map((genre, index) => (
                  <span key={index} className="bg-sky-100 text-sky-700 text-[10px] px-1.5 py-0.5 rounded">
                    {genre}
                  </span>
                ))}
                {ebook.genres.length > 2 && (
                  <span className="text-[10px] text-gray-500">+{ebook.genres.length - 2}</span>
                )}
              </div>
              
              <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-0.5 line-clamp-1">{ebook.title}</h1>
              <p className="text-xs text-gray-600 mb-2">by <span className="font-semibold">{ebook.author}</span></p>
              
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(ebook.rating) ? "text-yellow-400" : "text-gray-300"} />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">{ebook.rating} ({ebook.reviews})</span>
              </div>

              {/* Description with toggle */}
              <div className="mb-2">
                <p className="text-gray-600 text-xs leading-relaxed">
                  {showFullDescription ? ebook.longDescription || ebook.description : getPreviewDescription(ebook.longDescription || ebook.description)}
                </p>
                {(ebook.longDescription?.length > 200 || ebook.description?.length > 200) && (
                  <button 
                    onClick={toggleDescription}
                    className="text-sky-600 hover:text-sky-800 text-[10px] font-medium mt-0.5"
                  >
                    {showFullDescription ? 'Show less' : 'Read more'}
                  </button>
                )}
              </div>

              {/* Book Details - Compact Grid */}
              <div className="grid grid-cols-2 gap-1 mb-3 text-[10px]">
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-16">Published:</span>
                  <span className="text-gray-600">{ebook.publishDate}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-12">Pages:</span>
                  <span className="text-gray-600">{ebook.pages}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-16">Language:</span>
                  <span className="text-gray-600">{ebook.language}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-12">Format:</span>
                  <span className="text-gray-600 line-clamp-1">{ebook.format.split(' ')[0]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Links Section - Compact */}
        <div className="border-t border-gray-200 p-3 bg-gray-50">
          <h3 className="text-xs font-bold text-gray-800 mb-2">Available at:</h3>
          <div className="grid grid-cols-5 gap-1">
            {ebook.purchaseLinks.lehmanns && (
              <a 
                href={ebook.purchaseLinks.lehmanns}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-[#007a6b] hover:bg-[#007a6b]/80 text-white py-1.5 px-1 rounded text-[10px] transition-colors"
                title="Lehmanns"
              >
                <FaBook className="text-xs mb-0.5" />
                <span className="hidden sm:inline">Lehmanns</span>
              </a>
            )}
            
            {ebook.purchaseLinks.PChome && (
              <a 
                href={ebook.purchaseLinks.PChome}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-[#3bccff] hover:bg-[#3bccff]/80 text-white py-1.5 px-1 rounded text-[10px] transition-colors"
                title="PChome"
              >
                <FaBookReader className="text-xs mb-0.5" />
                <span className="hidden sm:inline">PChome</span>
              </a>
            )}
            
            {ebook.purchaseLinks.kobo && (
              <a 
                href={ebook.purchaseLinks.kobo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-[#cc0000] hover:bg-[#cc0000]/80 text-white py-1.5 px-1 rounded text-[10px] transition-colors"
                title="Kobo"
              >
                <FaBookOpen className="text-xs mb-0.5" />
                <span className="hidden sm:inline">Kobo</span>
              </a>
            )}
            
            {ebook.purchaseLinks.booktopia && (
              <a 
                href={ebook.purchaseLinks.booktopia}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-[#f4a51c] hover:bg-[#f4a51c]/80 text-white py-1.5 px-1 rounded text-[10px] transition-colors"
                title="Booktopia"
              >
                <FaBook className="text-xs mb-0.5" />
                <span className="hidden sm:inline">Booktopia</span>
              </a>
            )}
            
            {ebook.purchaseLinks.gandhi && (
              <a 
                href={ebook.purchaseLinks.gandhi}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-[#8B4513] hover:bg-[#8B4513]/80 text-white py-1.5 px-1 rounded text-[10px] transition-colors"
                title="Gandhi"
              >
                <FaBook className="text-xs mb-0.5" />
                <span className="hidden sm:inline">Gandhi</span>
              </a>
            )}
            
            {ebook.purchaseLinks.hugendubel && (
              <a 
                href={ebook.purchaseLinks.hugendubel}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-[#2c3e50] hover:bg-[#2c3e50]/80 text-white py-1.5 px-1 rounded text-[10px] transition-colors"
                title="Hugendubel"
              >
                <FaBook className="text-xs mb-0.5" />
                <span className="hidden sm:inline">Hugendubel</span>
              </a>
            )}
            
            {ebook.purchaseLinks.bol && (
              <a 
                href={ebook.purchaseLinks.bol}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-[#d50000] hover:bg-[#d50000]/80 text-white py-1.5 px-1 rounded text-[10px] transition-colors"
                title="Bol.com"
              >
                <FaBook className="text-xs mb-0.5" />
                <span className="hidden sm:inline">Bol</span>
              </a>
            )}
            
            {ebook.purchaseLinks.morawa && (
              <a 
                href={ebook.purchaseLinks.morawa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-[#4a6fa5] hover:bg-[#4a6fa5]/80 text-white py-1.5 px-1 rounded text-[10px] transition-colors"
                title="Morawa"
              >
                <FaBook className="text-xs mb-0.5" />
                <span className="hidden sm:inline">Morawa</span>
              </a>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default EBookShop;