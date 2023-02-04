import React, { useState } from 'react'

const NavMobile = ( {menu}) => {
    const [active, setActive]=useState("Home")
    const [toggle, setToggle] = useState(false);
  return (
    <div className="md:hidden relative">
     {toggle ?     <i className="fa-solid fa-xmark text-white  "   onClick={() => setToggle(!toggle)}   id="menu-close"></i> :  <i className="fa-solid fa-bars text-white" id="menu-bar"  onClick={() => setToggle(!toggle)}></i>}   
   
    
    <ul className={`${
            !toggle ? "hidden" : "flex"
          }  flex-col  bg-purple-600 rounded shadow-lg p-4 absolute top-5 right-5`} id="mobile-menu">

    {menu.map((nav, index) => (
          <li
            className={`mr-2 pt-1 ${
              active === nav.title ? "text-white" : "text-gray-200"
            } `}
            onClick={() => setActive(nav.title)}
          >
            <a className='link uppercase hover:text-white text-gray-200     py-4 px-4 ' href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        </ul>
   </div>  
  )
}

export default NavMobile