import React from 'react'
import Project from './Project'

const param=[{title: 'pro1', img: 'assets/img/1.jpg'},
{title: 'pro2', img: 'assets/img/11.png'},     ]




const Projects = () => {
  return (
    <section  className="md:mt-32  mt-2 py-2 md:py-12   bg-slate-50"  >


    <div className="md:w-3/5 w-full m-auto grid grid-cols-1 px-12 md:px-0   md:grid-cols-2 gap-6 align-center" id="projects">
       
        <div>
            <h3 className="text-black font-bold text-2xl py-4 uppercase" >
                Projects
               </h3>
        </div>
        <div>
            <p className="text-black font-light text-lg py-4" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minus deleniti asperiores fugit neque maxime minima labore eius saepe officia, repellat consequuntur amet doloremque eos, atque reprehenderit soluta quidem sint?
            </p>
            <a href=""  className="text-sky-500 ">Explore more...</a>
        </div>
   
    </div>    
    
    <div className="md:w-3/5 w-full m-auto grid grid-cols-1 px-12 md:px-0   md:grid-cols-2 gap-6 align-center" >
       
      {     
                  param.map((item)=>(
             
                    <Project pro={item} />
        
                )  )
      }
         

    
    </div>
</section>
  )
}

export default Projects
