
import Profile from '../components/about_me/Profile';
import Software from '../components/about_me/Software';
import Skill from '../components/about_me/Skill';


const AboutMePage = ( ) => {
  return (
    <>
      <div className="bg-black">
        <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/src/assets/images/006.png')" }}>
        </div>
      
        <Profile/>
      <Software />
      <Skill />
      </div>


    </>

  )
}

export default AboutMePage;