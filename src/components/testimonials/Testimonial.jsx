import React from 'react'

const Testimonial = ({data}) => {
  return (
    <div className="bg-gray-50  border-1 border-gray-50 text-black  rounded py-10 px-10  hover:bg-white hover:border-black hover:drop-shadow-2xl ">
    <p className="text-black font-light text-lg py-4" >
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis minima, cum dolor suscipit quo soluta porro iure qui quas odio aspernatur delectus deleniti? Adipisci dignissimos optio possimus animi cum inventore.
    </p>
  <div className="flex items-center"> 
    <img src={data.img}  className="rounded-full  block" width="55px" height="auto"  alt="" />
    <h3 className="font-bold pl-2 text-lg text-sky-500"> {data.name} <br /><span className="text-gray-400 italic text-sm">{data.job} </span></h3>
  </div>

</div>
  )
}

export default Testimonial