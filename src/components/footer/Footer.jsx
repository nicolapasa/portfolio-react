import React from 'react'

const Footer = () => {
  return (
    <div className="bg-purple-700 mt-12" id="contact">
    <div className="w-3/5 m-auto grid grid-cols-1 px-5 md:px-0   md:grid-cols-2 gap-10 align-center" >
             

        <div className="text-white py-24">
            <h3 className=" text-2xl font-extrabold py-4">
                Let's talk
              </h3>
         
              <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur veniam, dolorem quidem aut cupiditate ipsam corrupti sint iusto tempore quos sed, eum id? Ducimus adipisci nemo molestiae eum consequuntur.</p>
               

              <div className="flex py-4">
                <i className="fa-brands fa-instagram py-2 pr-4"></i>
                <i className="fa-brands fa-github py-2 pr-4"></i>
                <i className="fa-brands fa-linkedin py-2 pr-4"></i>
              </div>

        </div>
       
          <div className="text-white py-24">
           <form>
               <input type="text" name="name" className="mt-1 block w-full text-gray-900"  placeholder="your name"/>
               <br />
               <input type="email" name="" className="mt-1 block w-full text-gray-900"   placeholder="your email"/>
               <br />
               <textarea name="message" id=""  className="mt-1 block w-full text-gray-900" rows="3">
               </textarea>
               <br />
               <button className="bg-black py-4 px-5" type="submit">send</button>
               
           </form>
          </div>

    </div>

    <hr className="border-1 bg-gray-200 shadow" />

    <p className="container py-4 text-white text-center m-auto">
        copyright Nicola Pasa 2022
    </p>
   
</div>
  )
}

export default Footer;
