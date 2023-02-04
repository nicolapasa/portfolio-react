import React from 'react'

const Project = ({pro}) => {
    console.log(pro)
const myStyle={
    backgroundImage: `url( ${pro.img} ) `,
    backgroundRepeat: 'no-repeat'

}

  return (
    <div className=" py-12 align-center ">
    <div    className="mb-8  border-white border-8 shadow-2xl max-w-[520px] min-h-[320px]  bg-top  hover:bg-bottom transition-all duration-1000" 
    style={myStyle} alt="">
      
     </div>   

     <a href="" className="bg-purple-500 text-lg text-white px-8 py-5 "  >Github</a>
     <a href="" className="bg-black text-lg text-white px-8 py-5 "  >Live demo</a>
 </div> 
  )
}

export default Project