import { useState } from 'react';
import { ArrowUpRight, RotateCcw } from 'lucide-react';

export default function MetalDetail() {
  const [selectedImage, setSelectedImage] = useState(null);

  const campaignData = {
    title: "Metal Strings Short Film",
    mainImage: "/src/assets/images/mentaldetail/mentalPoster.jpg",
    about: "“METAL STRINGS” is a 25-minute music documentary that explores Cambodia’s underground metal scene through the story of the band Reign In Slumber. The film captures their emotional journey, creative struggles, and the challenges of keeping metal music alive in a society where it's often misunderstood.",
    work: "As a cinematographer on this project, I focused on translating the raw passion and energy of the band into powerful, immersive visuals. From live performances to intimate moments, my camera work aimed to reflect both the intensity and vulnerability of the scene. The film was screened at the Cloud Metal Film Fest and later featured at the Cambodia International Film Festival, marking a milestone in my journey as a visual storyteller.",
    gallery: [
      {
        id: 1,
        image: "/src/assets/images/mentaldetail/mentald1.png"
      },
      {
        id: 2,
        image: "/src/assets/images/mentaldetail/mentald2.png"
      },
      {
        id: 3,
        image: "/src/assets/images/mentaldetail/mentald3.png"
      },
      {
        id: 4,
        image: "/src/assets/images/mentaldetail/mentald4.png"
      },
      {
        id: 5,
        image: "/src/assets/images/mentaldetail/mentald5.png"
      },
      {
        id: 6,
        image: "/src/assets/images/mentaldetail/mentald6.png"
      },
      {
        id: 7,
        image: "/src/assets/images/mentaldetail/mentald7.png"
      },
      {
        id: 8,
        image: "/src/assets/images/mentaldetail/mentald8.png"
      }
    ],
    
  };

  return (
    <div className="font-sans min-h-screen bg-black text-white overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Hero Content */}
        <div className="relative flex flex-col justify-center p-8 lg:p-16">
          {/* Background Portrait */}
          <div className="absolute inset-0 z-0">
            <img 
              src={campaignData.mainImage}
              alt="Portrait"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 max-w-2xl">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8 px-30">
              {campaignData.title}
            </h1>

            {/* Content Sections */}
            <div className="space-y-8 text-sm leading-relaxed px-30">
              <div>
                <h3 className="text-white font-semibold mb-3 tracking-wider">ABOUT METAL STRINGS</h3>
                <p className="text-gray-300">{campaignData.about}</p>
              </div>


              <div>
                <h3 className="text-white font-semibold mb-3 tracking-wider">MY WORK</h3>
                <p className="text-gray-300">{campaignData.work}</p>
              </div>
              <div>
             
                <a
                  href="https://www.facebook.com/metalstrings.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Click Here to Learn More About Metal Strings
                </a>
                
              </div>

            </div>

            
          </div>
        </div>

        {/* Right Side - Gallery Grid */}
        <div className="bg-black p-4 lg:p-8 overflow-y-auto max-h-screen">
          

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-3">
            {campaignData.gallery.map((item) => (
              <div 
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={item.image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                
              </div>
            ))}
          </div>

          
         

          {/* Action Buttons */}
          <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
              <ArrowUpRight className="w-5 h-5 text-black" />
            </button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
              <RotateCcw className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}