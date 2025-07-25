import React from 'react';

const AboutMe = () => {
  return (
    <div className=" max-w-full mx-auto px-16 py-12 pt-24 relative z-10 ">
      {/* About Me Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-200 mb-8">
          About<br />Me
        </h1>
        
        <div className="font-sans grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Profile Image */}
          <div className="relative">
            <div className="overflow-hidden max-w-md">
              <img 
                src="/src/assets/images/profile1.png" 
                alt="Rayesh Nand Sharma"
                className="w-[340px] object-cover"
              />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-8 col-span-2">
            <div>
              <h2 className="text-4xl font-bold text-gray-200 mb-6">
                Rayesh Nand Sharma
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                I’m a Cambodia-based filmmaker and cinematographer passionate about blending traditional visual aesthetics with modern documentary techniques. I focus on capturing human-centered stories around music, identity, and cultural transformation across Southeast Asia.
                In 2024, I worked as a cinematographer on Metal Strings, a Cambodian–English music documentary. The project earned recognition at several international film festivals, including a finalist spot for Best Cinematographer at the Athens International Monthly Art Film Festival.
              </p>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-200 mb-4">Software</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <img src="/src/assets/images/software/davinci.png" alt="DaVinci Resolve" className="w-10 inline-block mr-2" />
                  <img src="/src/assets/images/software/adobe.png" alt="DaVinci Resolve" className="w-9 inline-block mr-2" />
                  <img src="/src/assets/images/software/lightroom.png" alt="DaVinci Resolve" className="w-9 inline-block mr-2" />
                  <img src="/src/assets/images/software/siduslink.png" alt="DaVinci Resolve" className="w-8 inline-block " />
                  <img src="/src/assets/images/software/canva.png" alt="DaVinci Resolve" className="w-14 inline-block mr-2" />

                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-200 mb-4">Area Of Interest</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <li>Documentaries</li>
                  <li>Drawing and Painting</li>
                  <li>History</li>
                  <li>Technology</li>
                  
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-200 mb-4">Skill</h3>
                <p className="text-gray-300 text-sm leading-relaxed ">
                  <li>Cinematography (DSLR, mirrorless, and cinema cameras)</li>
                  <li>Lighting and grip work</li>
                  <li>Color grading and post-production</li>
                  <li>On-location AV setup</li>
                  <li>Visual scripting and storyboarding</li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Sections */}
      <div className="font-sans grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left Column */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Education</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Bachelor of Arts in Film & Media Studies
              Pour un Sourire d'Enfant <b>(PSE Institute)</b>
              I specialized in cinematography and post-production.
            </p>
          </div>
          
          
        </div>
        
        {/* Right Column */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Project</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              <li>Sinhan Bank Commercial Project</li>
              <li>Metal Strings (2024)</li>
              <li>The Orange</li>
              <li>Vivo Commercial</li>
              <li>Three Bakery</li>
              <li>Celebrating Cambodia</li>
              
              
            </p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default AboutMe;