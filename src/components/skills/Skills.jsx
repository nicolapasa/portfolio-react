import React from 'react'
import ListItemSkills from './ListItemSkills'

const Skills = () => {
  return (
    <section  className="md:mt-32  mt-2  py-2 md:py-12  bg-purple-600 "  >

    <div className="md:w-3/5 w-full m-auto grid grid-cols-1 px-12 md:px-0   md:grid-cols-2 gap-6 align-center" id="skills">
                    

          <div>
            <h3 className="text-white font-extrabold text-2xl py-4" >
             My skills and tools
             </h3>
             <p className="text-light text-slate-100 py-4 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veritatis doloremque sed quibusdam dignissimos, reiciendis fugit aut 
              magni illo praesentium vero quisquam, eveniet, voluptate necessitatibus optio assumenda eius nemo ullam.
             </p>
             <a href="mailto:nicola.pasa@gmail.com" className=" bg-lime-600 hover:bg-transparent border-2 border-lime-600  hover:border-white text-lg text-white px-3 py-4 ">Hire me</a>
             
          </div>

        <ListItemSkills />


     </div> 


  </section>  
  )
}

export default Skills
