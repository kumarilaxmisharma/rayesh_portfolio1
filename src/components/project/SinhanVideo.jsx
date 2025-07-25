const SinhanVideo = () => {
  return (
    //Write a heading text on top of video h2
    <div className="flex flex-col z-10 relative">
      <h3 className="flex text-gray-200 mb-12 text-6xl font-bold items-start">SINHAN BANK</h3>
      <div className="flex items-center justify-center">
        <div className="flex flex-row gap-8 w-full">
          {/* Video 1 */}
          <div className="flex-1">
            <video
              src="/assets/videos/sinhan1.mp4"
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              preload="auto"
              poster="/assets/images/sinhan/sinhan_thumbnail1.png"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Video 2 */}
          <div className="flex-1">
            <video
              src="/assets/videos/sinhan2.mp4"
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              preload="auto"
              poster="/assets/images/sinhan/sinhan_thumbnail2.png"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinhanVideo;
