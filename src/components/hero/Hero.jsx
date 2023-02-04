import React from 'react'
import { heroBG } from '../../assets/img'
const Hero = () => {
  return (
    <section  className="md:mt-36 mt-4  "  >
    <div className="md:w-3/5 w-full  m-auto grid grid-cols-1 px-5 md:px-0   md:grid-cols-2 gap-6 align-center" >
       <div className="md:mt-36" >  
         <h2 className="text-2xl text-indigo-500 font-bold">Hello there I'm  </h2>
        <div className="text-7xl font-bold">Nicola Pasa </div>
        <p className="prose text-justify mt-4 pr-10">
          I am a full stack developer. I can build websites, web apps and videogames for you. For further informations feel free to contact me.
        </p>
        <div className="flex py-4">
          <i className="fa-brands fa-instagram py-2 pr-4"></i>
          <i className="fa-brands fa-github py-2 pr-4"></i>
          <i className="fa-brands fa-linkedin py-2 pr-4"></i>
        </div>

    </div> 
     <div className="hidden md:block ">
        <img src={heroBG} alt="" />
     </div> 
    
    </div>
</section>
  )
}

export default Hero