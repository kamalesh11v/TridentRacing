import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import '../index.css';

export const Sponsors = () => {
  // List of sponsor images
  const sponsorImages = [
    '/assets/sponsor1.png',
    '/assets/sponsor2.png',
    '/assets/sponsor3.jpg',
    '/assets/sponsor4.jpg',
    '/assets/sponsor5.jpg',
    '/assets/sponsor6.png',
    '/assets/sponsor7.jpg',
    '/assets/sponsor8.jpg',
    '/assets/sponsor9.png',
    '/assets/sponsor10.png',
    '/assets/sponsor11.png',
    '/assets/sponsor12.png',
    '/assets/sponsor13.jpg',
    // Add more images as needed
  ];

  return (
    <>
     <div className="bg-gray-900">
        <Navbar />
      </div>

      <div className="text-white font-semibold text-4xl text-center pt-20 bg-gray-900">
        Our Sponsors
      </div>

      <div className="bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sponsorImages.map((src, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <img src={src} alt={`Sponsor ${index + 1}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
};

