import React from 'react'
import Services from './Services'

const About = () => {
  return (
    <section className="md:mt-32 mt-4 md:py-10 py-2"  >
    <div className="md:w-3/5 w-full m-auto grid  px-5 md:px-0 md:grid-rows-2 grid-cols-1  md:grid-cols-4 gap-2 align-center" >

       <div className="bg-purple-600 text-white md:row-span-2 py-4 px-5" id="about" >
        <h3 className="font-extrabold text-7xl">15 + </h3>
        <h3 className="font-extrabold text-4xl">year of experiences </h3>
        <p className="prose py-2 mt-10">           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum veritatis quisquam. 
            Cum quibusdam sit, iste hic assumenda nam quae nemo, dignissimos dolore sapiente inventore labore repudiandae laboriosam error earum? </p>
       </div>
       <div className=" text-black md:col-span-3 ">
        <h3 className="font-extrabold text-2xl px-12 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore dolore nulla hic magnam. Quis reiciendis nostrum at suscipit ad alias asperiores sequi nulla ut dolor, sit autem ab cum. </h3>
        </div>
        <Services info={{ title: 'Game Design', icon: 'fa-code'  } }  />
        <Services info={{ title: 'Web  Design', icon: 'fa-gears'  } }  />
        <Services info={{ title: 'App Development', icon: 'fa-code-pull-request'  } }  />
        
    </div>
</section>    
  )
}

export default About