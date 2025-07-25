import React from 'react'

const galleryImages = [
    {
      id: 1,
      src: "/assets/images/mentalbts/mentalbts1.jpg",
      alt: "Behind the scenes filming"
    },
    {
      id: 2,
      src: "/assets/images/mentalbts/mentalbts2.jpg",
      alt: "Camera equipment setup"
    },
    {
      id: 3,
      src: "/assets/images/mentalbts/mentalbts3.jpg",
      alt: "Film production"
    },
    {
      id: 4,
      src: "/assets/images/mentalbts/mentalbts4.jpg",
      alt: "Director at work"
    },
    {
      id: 5,
      src: "/assets/images/mentalbts/mentalbts5.jpg",
      alt: "Film crew working"
    },
    {
      id: 6,
      src: "/assets/images/mentalbts/mentalbts6.jpg",
      alt: "Beach filming location"
    },
    {
      id: 7,
      src: "/assets/images/mentalbts/mentalbts7.jpg",
      alt: "Beach filming location"
    },
    {
      id: 8,
      src: "/assets/images/mentalbts/mentalbts8.png",
      alt: "Beach filming location"
    },
    {
      id: 8,
      src: "/assets/images/mentalbts/mentalbts.png",
      alt: "Beach filming location"
    }
    
  ];


const MetalStringBTS = () => {
  return (
    <div className="font-sans w-full min-h-screen mb-1">

      {/* Gallery Grid Container */}
      <div className="relative w-full h-screen overflow-hidden mt-1 mb-1">
        {/* Small Images on Left  */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
          
          {/* 1 Big Images In the Center */}
          <div className="relative overflow-hidden col-span-4 row-span-4">
            <img
              src={galleryImages[8].src}
              alt={galleryImages[8].alt}
              className="w-full h-full object-cover shadow-md"
            />  
          </div>
        </div>


        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-baseline justify-end mt-10">
          <div className="max-w-2xl px-8 text-start text-[#ECCCCC] mb-16">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Metal String - 
              <br />
              Documentary
            </h1>
            
            {/* Description */}
            <p className="flex text-sm md:text-medium leading-relaxed mb-8 text-[#ECCCCC] text-justify-start">
              As the Director of Photography(DOP), I crafted a bold and immersive visual style that matched the film’s intense emotional tone. Using dynamic lighting, handheld movement, and deep reds, I aimed to reflect the chaos, passion, and authenticity of the music and its culture. My cinematography played a key role in amplifying the film’s energy, helping it connect with both underground and festival audiences.
            </p>
          </div>
        </div>


      </div>

      {/* Gallery Grid Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Small Images on Left  */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-5 gap-1">
          

          {/* 2 small Images On The left */}
          {galleryImages.slice(0, 2).map((image) => (
          <div key={image.id} className="relative overflow-hidden ">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover shadow-md"
            />  
          </div>
          ))}


          {/* 1 Big Image On The Right */}
          <div className="relative overflow-hidden col-span-2 row-span-5">
            <img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className="w-full h-full object-cover shadow-md"
            />  
          </div>

          
          {galleryImages.slice(3, 5).map((image) => (
          <div key={image.id} className="relative overflow-hidden ">
            <img
              src={image.src}
              alt={image.alt}   
              className="w-full h-full object-cover shadow-md"
            />
          </div>
          ))}

          {galleryImages.slice(5, 7).map((image) => (
          <div key={image.id} className="relative overflow-hidden ">
            <img
              src={image.src}
              alt={image.alt}   
              className="w-full h-full object-cover shadow-md"
            />
          </div>
          ))}

          
          <div className="relative overflow-hidden col-span-2 row-span-2">
            <img
              src={galleryImages[7].src}
              alt={galleryImages[7].alt}   
              className="w-full h-full object-cover shadow-md"
            />
          </div>

          

        </div>
      </div> 
    </div>


  )
};

export default MetalStringBTS;
