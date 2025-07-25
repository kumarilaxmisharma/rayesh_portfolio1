import React from 'react'

const Companies = () => {
  return (
    <div className="grid grid-cols-2 justify-center items-center text-white">

      {/*Text */}
      <div className="grid grid-cols-1 w-full min-h-screen px-16 pt-22 relative">
        <h3 className="text-white text-2xl font-bold text-left relative z-10">
          Companies I have worked with
        </h3>

        <p className="text-gray-200 font-semibold text-md md:text-medium leading-relaxed text-justify mt-4">
          “Every brand I collaborate with is a chance to tell a new story."
        </p>


        {/* Company Logos  */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-1 opacity-80 max-h-[180px] overflow-hidden">
          <img src="/src/assets/images/companies/vivo1.png" alt="Client 1" className="w-20 h-20 object-contain m-1" />
          <img src="/src/assets/images/companies/8teen1.png" alt="Client 2" className="w-20 h-20 object-contain m-1" />
          <img src="/src/assets/images/companies/3bakery1.png" alt="Client 3" className="w-20 h-20 object-contain m-1" />
          <img src="/src/assets/images/companies/sinhan1.png" alt="Client 4" className="w-20 h-20 object-contain m-1" />
          <img src="/src/assets/images/companies/sony.png" alt="Client 5" className="w-20 h-20 object-contain m-1" />
          <img src="/src/assets/images/companies/anti-archive.png" alt="Client 6" className="w-20 h-20 object-contain m-1" />
          <img src="/src/assets/images/companies/aputure.png" alt="Client 7" className="w-20 h-20 object-contain m-1" />
        </div>

        
      </div>

      
      


      {/*Image */}
      <div className="grid grid-cols-1 justify-end items-center h-screen relative z-10">
        <img src="src/assets/images/rayesh.png" alt="rayesh image" />
      </div>

    </div>
  )
}

export default Companies;