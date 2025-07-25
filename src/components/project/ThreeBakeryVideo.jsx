
const ThreeBakeryVideo = () => {
  return (
    <div className="flex flex-col mt-18 mb-4 z-10 relative">
      <h3 className="flex text-gray-200 text-6xl font-bold items-start mb-12">3 Bakery</h3>
      <div className="flex flex-col items-center justify-center">
      {/* <h1 className="text-4xl font-bold mb-4 text-gray-800 ">ShowReel Video</h1> */}
      <video 

        src='/assets/videos/threebakery.mp4'
    
        //Make it pause when user scrolls past it
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        preload="auto"
        
        // poster="/src/assets/images/vivobts2/vivo_thumbnail2.png"
        className="w-full max-full rounded-lg shadow-lg"
      />
    </div>
    </div>
  );
}

export default ThreeBakeryVideo;
