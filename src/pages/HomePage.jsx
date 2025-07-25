import ShowReel from '../components/home/ShowReel';
import { Send, Linkedin, Facebook, Youtube } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-black px-8">
      {/* Background image */}
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/assets/images/006.png')" }}>
      </div>
      
      <div className="w-full h-screen flex items-center justify-center relative z-10">
        
        {/* Main Content Container */}
        <div className="flex flex-col items-left text-left text-white p-8 rounded-lg z-20">
          {/* Name and Title */}
          <div className="flex flex-row items-center">
            <h1 className="text-8xl font-bold text-[#FA2C37]">Rayesh Nand Sharma 
              <i className="text-white">Creative Film Maker</i> </h1>
          </div>
         
      
             
          {/* <div className="flex flex-row items-center">
            <h1 className="text-lg font-sans mb-8 text-gray-200 pl-2">Film maker</h1>
          </div> */}
        
          
          {/* Company Logos - Now below the name */}
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 mt-30">
            <img src="/assets/images/companies/vivo1.png" alt="Client 1" className="w-24 h-24 object-contain" />
            <img src="/assets/images/companies/8teen1.png" alt="Client 2" className="w-24 h-24 object-contain" />
            <img src="/assets/images/companies/3bakery1.png" alt="Client 3" className="w-24 h-24 object-contain" />
            <img src="/assets/images/companies/sinhan1.png" alt="Client 3" className="w-24 h-24 object-contain" />
            <img src="/assets/images/companies/sony.png" alt="Client 3" className="w-24 h-24 object-contain" />
            <img src="/assets/images/companies/anti-archive.png" alt="Client 3" className="w-24 h-24 object-contain" />
            <img src="/assets/images/companies/aputure.png" alt="Client 3" className="w-24 h-24 object-contain" />
          </div>
        </div>

        {/* Social Media Links - Positioned to the right and vertical */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 opacity-80 hover:opacity-100 transition-opacity duration-300 z-30">
          <a
            href="https://t.me/Rad10060"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
            aria-label="Telegram"
          >
            <Send className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://www.facebook.com/rayesh.nand.sharma.2025"
            target="_blank"          
            rel="noopener noreferrer"          
            className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            aria-label="Facebook"          
          >
            <Facebook className="w-6 h-6 text-white" />
          </a>        
          <a
            href="#"
            target="_blank"          
            rel="noopener noreferrer"          
            className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            aria-label="LinkedIn"          
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>        
          <a
            href="https://www.youtube.com/@Rayesh007/featured"
            target="_blank"          
            rel="noopener noreferrer"          
            className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            aria-label="Youtube"          
          >
            <Youtube className="w-6 h-6 text-white" />
          </a>        
        </div>

      </div>
      
      {/* ShowReel with proper z-index to appear above background */}
      <div className="w-full flex items-center justify-center relative z-10">
        <ShowReel />
      </div>
    </div>
  );
};

export default HomePage;