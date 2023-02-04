import React, { useState } from 'react'

const Navbar = ({menu}) => {
 const [active, setActive]=useState("Home")
  
  return (
    <nav className="hidden md:block ">
    <ul className="flex ">
    {menu.map((nav, index) => (
          <li
            className={`mr-2 pt-1  ${index === menu.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a className={`${
              active === nav.title ? "bg-purple-400" : "bg-transparent"
            } link uppercase text-cool-gray-900 hover:text-cool-gray-400  hover:bg-purple-400   py-3 px-4 rounded `} href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

       
   </ul>
</nav>
  )
}

export default Navbar