import React from 'react'
import {Bento} from '../components/service/Bento';

function ServicesPage() {
  return (

    <div className="font-sans w-full bg-black min-h-screen px-16 pt-24
    pb-12">
      <h1 className="text-5xl font-bold text-white mb-12 text-center">Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-slate-400">Services</span></h1>
      
      <Bento />

    </div>
    
  )
}

export default ServicesPage;