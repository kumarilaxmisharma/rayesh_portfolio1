import React from 'react'
import MetalDetail from '../components/project/MetalDetail';
import Vivo1 from '../components/project/Vivo1';
import Vivo2BTS from '../components/project/Vivo2BTS';
import MetalStringBTS from '../components/project/MetalStringBTS';
import MetalTrailer from '../components/project/MetalTrailer';
import SinhanVideo from '../components/project/SinhanVideo';
import VivoVideo1 from '../components/project/VivoVideo1';
import VivoVideo2 from '../components/project/VivoVideo2';
import VivoVideo3 from '../components/project/VivoVideo3';
import VivoVideo45 from '../components/project/VivoVideo45';
import OrangeVideo from '../components/project/OrangeVideo';
import ThreeBakeryVideo from '../components/project/ThreeBakeryVideo';
import Companies from '../components/project/Companies';
// import SatorVideo from '../components/project/SatorVideo';
// import OrangeDetail from '../components/project/OrangeDetail';


const ProjectsPage = () => {
  return (
    <div>
    <div className="w-full bg-black min-h-screen px-16 pt-32">
      {/* Background image */}
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/assets/images/006.png')" }}>
      </div>
      
      //Sinhan Bank
      <SinhanVideo />

      //Metal Strings
      <MetalTrailer />
      <MetalDetail />
      <MetalStringBTS />

      // The Orange
      <OrangeVideo  /> 
      {/* <OrangeDetail /> */}

      //Vivo Commercial
      <VivoVideo1 />
      <Vivo1 />
      <VivoVideo2 />
      <Vivo2BTS />

      <VivoVideo3 />
      <VivoVideo45 />

      <ThreeBakeryVideo />

      {/* <SatorVideo /> */}

    
    </div>

    <Companies />
    </div>

  )
}

export default ProjectsPage