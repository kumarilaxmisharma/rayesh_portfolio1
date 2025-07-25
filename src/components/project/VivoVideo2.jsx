
const VivoVideo2 = () => {
  return (
    <div className="flex flex-col pt-18 pb-4 z-10 relative">
      <h3 className="flex text-gray-200 text-6xl font-bold items-start mb-12">2nd VIVO COMMERCIAL</h3>
      <div className="flex flex-col items-center justify-center">
      {/* <h1 className="text-4xl font-bold mb-4 text-gray-800 ">ShowReel Video</h1> */}
      <video 

        src='/src/assets/videos/vivo2.mp4'
    
        //Make it pause when user scrolls past it
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        preload="auto"
        
        poster="/src/assets/images/vivobts2/vivo_thumbnail2.png"
        className="w-full max-full rounded-lg shadow-lg"
      />
    </div>
    </div>
  );
}

export default VivoVideo2;
