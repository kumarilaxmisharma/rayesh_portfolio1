import React from 'react'

const Software = () => {
  return (
    <div className="w-full min-h-screen bg-cover flex flex-col pt-16 opacity-90">
      <div className="max-w-7xl mx-auto w-full px-4">
        <h2 className="text-5xl font-bold text-gray-100 mb-12">Software</h2>
        {/* First Row */}
        <div className="flex items-center mb-24">
          {/* Premiere Pro Icon */}
          <div className="flex-shrink-0">
            <img
              src="/assets/images/software/adobe.png"
              alt="Premiere Pro"
              className="w-48 h-48"
            />
          </div>
        
          {/* Description */}
          <div className="flex-1">
            <p className="font-sans text-gray-200 text-lg leading-relaxed text-justify pl-10 pr-65">
              I use Adobe Premiere Pro to craft clean, engaging edits for documentaries, music videos, and branded content. I’m skilled in multi-camera editing, audio syncing, motion graphics, and fast-paced storytelling. My workflow is organized, client-friendly, and efficient—focused on clarity and emotion. I also integrate After Effects when needed for dynamic visuals. Whether it’s a quick edit or a full-length piece, I rely on Premiere to bring out the best in every frame.
            </p>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex items-center justify-end">
          {/* Description */}
          <div className="flex-1 text-right">
            <p className="font-sans text-gray-200 text-lg leading-relaxed text-justify pr-10 pl-60">
              I use DaVinci Resolve for professional color grading and final delivery. I’m skilled in matching shots, creating cinematic moods, and enhancing visual consistency using nodes, power windows, and tracking. I work with calibrated monitors for accurate color and tone, ensuring the final look is natural yet impactful. Resolve helps me add depth and emotion through color, turning raw footage into polished visuals. I also handle high-quality exports in various formats for both web and broadcast.
            </p>
          </div>
          {/* Arrow */}
         
          {/* DaVinci Resolve Icon */}
          <div className="flex-shrink-0">
            <img
              src="/assets/images/software/davinci.png"
              alt="DaVinci Resolve"
              className="w-52 h-52  "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Software