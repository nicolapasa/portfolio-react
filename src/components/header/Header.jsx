import React from 'react'
import Navbar from './Navbar'
import NavMobile from './NavMobile'
import { navLinks } from './menu'

const Header = () => {
  return (
    <header className="bg-black  md:bg-white sticky top-0 shadow  py-12 z-10 " id="header"> 
    <div className="w-4/5 flex flex-wrap justify-between  m-auto">
        <h1 id="logo" className="text-4xl md:text-gray-900 text-white font-extrabold"> Nicola Pasa, Full Stack developer</h1>

        <div className="flex lg:justify-end  justify-end md:justify-start md:mt-2 flex-grow  content-center">
          <NavMobile  menu={navLinks} />
          <Navbar  menu={navLinks}/>
        </div>
    </div>

</header>
  )
}

export default Header