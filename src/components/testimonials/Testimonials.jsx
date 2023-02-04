import React from 'react'
import Testimonial from './Testimonial'

const param=[
    {name: 'John Doe', img: 'assets/img/icons/100_1.jpg', job: 'Artist'},
    {name: 'Leila Groe', img: 'assets/img/icons/100_11.jpg', job: 'Musician'},     
    {name: 'Susy Nasty', img: 'assets/img/icons/100_2.jpg', job: 'Designer'},   
    {name: 'Beverly Ross', img: 'assets/img/icons/100_4.jpg', job: 'Writer'},   
]



const Testimonials = () => {
  return (
    <section  className="md:mt-5  mt-2  py-2  md:py-12 "  >
    <div className="m-auto md:text-center  text-justify px-2 md:w-2/5 w-full  " id="testimonials">
        <h3 className="text-black font-bold text-2xl py-4" > Testimonials</h3>
        <p className="text-black font-light text-lg py-4" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ea facilis autem, mollitia et vero dolor quo quibusdam iusto debitis est, provident fugit. Voluptatum iste delectus, est itaque deserunt corporis! </p>
    </div>
                   

    <div className="md:w-3/5 w-full m-auto grid grid-cols-1 px-12 md:px-0   md:grid-cols-2 gap-6 align-center" >
       

       {

          param.map((data)=>(
            <Testimonial  data={data} />

          )  ) 

       }
  
            
    </div>   

 </section>   
  )
}

export default Testimonials
