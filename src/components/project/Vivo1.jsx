import React from 'react';

const Gallery = () => {
  // You can easily replace these placeholder images with your actual project images
  const galleryImages = [
    {
      id: 1,
      src: "/src/assets/images/vivobts1/vivo.png",
      alt: "Behind the scenes filming"
    },
    {
      id: 2,
      src: "/src/assets/images/vivobts1/vivo1.png",
      alt: "Camera equipment setup"
    },
    {
      id: 3,
      src: "/src/assets/images/vivobts1/vivo4.png",
      alt: "Film production"
    },
    {
      id: 4,
      src: "/src/assets/images/vivobts1/vivo5.png",
      alt: "Director at work"
    },
    {
      id: 5,
      src: "/src/assets/images/vivobts1/vivo6.png",
      alt: "Film crew working"
    },
    {
      id: 6,
      src: "/src/assets/images/vivobts1/vivo7.png",
      alt: "Beach filming location"
    },
    {
      id: 7,
      src: "/src/assets/images/vivobts1/vivo8.png",
      alt: "Professional camera work"
    },
    {
      id: 8,
      src: "/src/assets/images/vivobts1/vivo9.png",
      alt: "Film set equipment"
    },
    {
      id: 9,
      src: "/src/assets/images/vivobts1/vivo3.png",
      alt: "Film set equipment"
    },
    {
      id: 10,
      src: "/src/assets/images/vivobts1/vivo2.png",
      alt: "Film set equipment"
    }
  ];

  return (
    <div className="font-sans w-full min-h-screen">
      {/* Gallery Grid Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background mosaic of images */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1">
          {/* Row 1: 4 normal images (indices 0-3) */}
          {galleryImages.slice(0, 4).map((image) => (
            <div key={image.id} className="relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-20 hover:bg-opacity-30 transition duration-300"></div>
            </div>
          ))}

          {/* Row 2: 4 normal images (indices 4-7) */}
          {galleryImages.slice(4, 8).map((image) => (
            <div key={image.id} className="relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-20 hover:bg-opacity-30 transition duration-300"></div>
            </div>
          ))}

          {/* Row 3-4: First large image (spans 2 rows and 2 columns - columns 1&2) */}
          <div className="relative overflow-hidden col-span-2 row-span-2">
            <img
              src={galleryImages[8].src}
              alt={galleryImages[8].alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-opacity-20 hover:bg-opacity-30 transition duration-300"></div>
          </div>
          
          {/* Row 3-4: Second large image (spans 2 rows and 2 columns - columns 3&4) */}
          <div className="relative overflow-hidden col-span-2 row-span-2">
            <img
              src={galleryImages[9].src}
              alt={galleryImages[9].alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-opacity-20 hover:bg-opacity-30 transition duration-300"></div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="max-w-2xl px-8 text-start text-[#CAFBFC] mb-16">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Vivo's Commercial - 
              <br />
              First Project
            </h1>
            
            {/* Description */}
            <p className="flex text-sm md:text-medium leading-relaxed mb-8 text-[#acffff] text-justify-start">
              Working on this commercial for Vivo Cambodia was a defining moment in my cinematography journey. As the Director of Photography, I had the opportunity to lead the camera team and bring the creative vision to life. Shooting under natural light on a beach presented unique challenges, but it also allowed me to experiment with movement, framing, and storytelling. This project taught me the importance of collaboration on set and helped shape my confidence behind the lens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;