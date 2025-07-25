
const ShowReel = () => {
  return (
    <div className="flex flex-col pt-18 pb-4 px-16">
      <h3 className="flex text-gray-200 text-6xl font-bold items-start mb-12">Showreel</h3>
      <div className="flex flex-col items-center justify-center">
      {/* <h1 className="text-4xl font-bold mb-4 text-gray-800 ">ShowReel Video</h1> */}
      <video 
        src='/src/assets/videos/showreel.mp4'
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        preload="auto"
        poster="/src/assets/showreel_thumbnail.png"
        className="w-full max-full rounded-xl shadow-lg"
      />
    </div>
    </div>
  );
}

export default ShowReel;
