import React from 'react'

const Services = ({info}) => {
  return (
    <div className="bg-gray-50 text-black  hover:bg-purple-500 hover:text-white md:-mt-12 py-10 px-10   pb-12  ">
            <i className={`fa-solid ${info.icon} py-5`}></i>
            <h3 className="text-black font-bold text-2xl py-4" >
              {info.title}
             </h3>
             <a href="" className="text-blue-400 text-lg"> Discover more <i className="fa-solid fa-arrow-right"></i></a>
    </div>    
  )
}

export default Services