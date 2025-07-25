import React from 'react'

const galleryImages = [
    {
      id: 1,
      src: "/assets/images/vivobts2/vivobts.jpg",
      alt: "Behind the scenes filming"
    },
    {
      id: 2,
      src: "/assets/images/vivobts2/vivobts1.jpg",
      alt: "Camera equipment setup"
    },
    {
      id: 3,
      src: "/assets/images/vivobts2/vivobts4.jpg",
      alt: "Film production"
    },
    {
      id: 4,
      src: "/assets/images/vivobts2/vivobts5.jpg",
      alt: "Director at work"
    },
    {
      id: 5,
      src: "/assets/images/vivobts2/vivobts6.jpg",
      alt: "Film crew working"
    },
    {
      id: 6,
      src: "/assets/images/vivobts2/vivobts3.jpg",
      alt: "Beach filming location"
    },
    {
      id: 7,
      src: "/assets/images/vivobts2/vivobts2.jpg",
      alt: "Professional camera work"
    }
  ];


const Vivo2BTS = () => {
  return (
  
    <div className="font-sans w-full min-h-screen mb-1">
      {/* Gallery Grid Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Small Images on Left  */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1">

          {/* Row 1: 2 normal images (indices 0-3) */}
          {galleryImages.slice(0, 2).map((image) => (
            <div key={image.id} className="relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover shadow-md"
              />
            </div>
          ))}
          
          {/* One Big Image On The Right */}
          <div className="relative overflow-hidden col-span-2 row-span-4">
            <img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className="w-full h-full object-cover shadow-md"
            />  
          </div>


          {/* Row 2: 2 normal images (indices 4-6) */}
          {galleryImages.slice(3, 5).map((image) => (
            <div key={image.id} className="relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover shadow-md"
              />
            </div>
          ))}

          {/* 2 Medium Image On The Left */}
          {galleryImages.slice(5, 7).map((image) => (
          <div key={image.id} className="relative overflow-hidden row-span-2 ">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover shadow-md"
            />
          </div>
          ))}

  
        </div>


        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-baseline justify-end mt-10">
          <div className="max-w-2xl px-8 text-start text-[#EAF2F4] mb-16">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Vivo's Commercial - 
              <br />
              Second Project
            </h1>
            
            {/* Description */}
            <p className="flex text-sm md:text-medium leading-relaxed mb-8 text-[#EAF2F4] text-justify-start">
              This second collaboration with Vivo Cambodia was a deeply rewarding experience for me as Director of Photography. Set in a more controlled indoor environment, I focused on lighting precision, color temperature, and camera movement to shape the mood and narrative. Every shot was carefully crafted to match the brand’s tone, while also experimenting with visual storytelling in tighter, more intimate spaces. It was an incredible opportunity to grow creatively and technically alongside a talented and passionate crew.
            </p>
          </div>
        </div>

      </div>
    </div>  
  )
};

export default Vivo2BTS;
