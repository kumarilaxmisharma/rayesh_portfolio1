import React from 'react'

const skills = [
  {
    title: "Videography",
    description:
      "I capture stories through the lens with a creative and professional eye. I focus on clear composition, smooth camera movement, and the right angles to make every shot meaningful. Whether it's an interview, event, or short film, I make sure the footage looks polished and cinematic from start to finish.",
  },
  {
    title: "Lighting",
    description:
      "Lighting sets the mood, and I know how to use it well. I balance natural and artificial light to bring out the best in every subject and scene. I work with key, fill, and backlighting techniques to create depth and emotion while ensuring a clean and professional look.",
  },
  {
    title: "Video Editing",
    description:
      "I use top editing software like Adobe Premiere Pro and DaVinci Resolve to create smooth, engaging videos. From cutting scenes and syncing audio to adding transitions and color grading, I handle everything with care. My edits are fast-paced or slow and emotional—depending on the story you want to tell.",
  },
  {
    title: "Script Writing",
    description:
      "Every great video starts with a strong script. I craft clear, compelling scripts designed to capture attention and deliver your message effectively using Final Draft. From ad copy to short films and digital content, I shape stories that connect with your audience and support strong visual execution, as represented by the iconic scriptwriting symbol.",
  },
  {
    title: "Lighting Floor Plan",
    description:
      "Lighting can make or break a shot. I design detailed lighting floor plans that map out the exact position of lights, cameras, and set pieces—ensuring every scene is well-lit and visually balanced. The illustrated layout provides a professional blueprint to guide efficient and effective on-set production.",
  },
  {
    title: "Drone Filming",
    description:
      "Capture stunning aerial footage with precision. Using advanced drones, I plan and execute cinematic shots that elevate your video production. Whether for establishing shots, action scenes, or unique perspectives, the drone setup ensures high-quality visuals from above, just like the model displayed.",
  },
]

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-cover pt-16 opacity-90">
      <div className="max-w-full w-full px-16 grid grid-cols-2 gap-32">
        {/* Text: Left Column */}
        <div className="grid grid-cols-1  ">
          <h2 className="text-5xl font-bold text-gray-100 mb-12">Skills</h2>
          {skills.map((skill) => (
            <div key={skill.title} className="font-sans mb-24">
              <h3 className="text-3xl font-bold text-gray-100 mb-2 ">{skill.title}</h3>
              <p className="text-gray-200 text-lg leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Visual: Right Column */}

        <div className="grid grid-cols-1 items-end justify-center">
          <img src="/assets/images/arri.png" alt="camera" className="w-100"/>
          <img src="/assets/images/aputure.png" alt="camera" className="w-100" />
          <img src="/assets/images/software/davinci.png" alt="camera" className="w-70"/>
          <img src="/assets/images/finaldraft1.png" alt="camera" className="w-70"/>
          <img src="/assets/images/lightfloor.png" alt="camera" className="w-100 rounded-2xl"/>
          <img src="/assets/images/djidrone.png" alt="camera" className="w-200"/>
          
        </div>



      </div>
    </div>
  )
}

export default Skills;