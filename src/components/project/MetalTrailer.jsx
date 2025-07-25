
const MetalTrailer = () => {
  return (
    <div className="flex flex-col pt-18 pb-4 z-10 relative">
      <h3 className="flex text-gray-200 text-6xl font-bold font-rubik items-start mb-12">METAL STRINGS</h3>
      <div className="flex flex-col items-center justify-center">
        {/* <h1 className="text-4xl font-bold mb-4 text-gray-800 ">ShowReel Video</h1> */}
        <video 

          src='/src/assets/videos/Metal Strings Trailer.mp4'
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          preload="auto"
          poster="/src/assets/images/mentaldetail/thumbnail.png"
          className="w-full max-full rounded-lg shadow-lg"
        />
      </div>

    </div>
  );
}

export default MetalTrailer;
