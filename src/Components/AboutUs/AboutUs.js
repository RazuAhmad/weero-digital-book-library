import React from "react";
import "./AboutUs.css";
// import logo from "../../images/weero-dital-icon.jpg"
import Typewriter from "typewriter-effect";
const AboutUs = () => {
  return (
    <div className="p-6 md:px-18 md:pt-7 mt-14 md:mt-20 flex flex-col items-center justify-between text-white footer_container text-xl">
      
      {/* Request early access */}
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="">
          <Typewriter
            options={{
              strings: ["Do you want to pre-order", "Our Latest books?"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>Request For Pre-booking</p>
      </div>

     
      <div className="flex flex-col items-center">

      {/* About us, Newsletter , Follow Us container */}
      <div className="flex flex-col items-center justify-between gap-11 md:flex-row">
            
            {/* About us start */}
             <div className="flex flex-col items-start w-1/3 ">
               <h1 className="text-white font-bold text-3xl mb-3">About us</h1>
               <p className="">
                 Lorem ipsum dolar submit amet, consectetur adipisicing elit. Earum
                 maxime ea similique
               </p>
               
             </div>
             {/* About us ended */}
   
   {/* Newsletter Section  start*/}
   
   <div className="flex flex-col items-start w-1/3 ">
               <h2 className="text-white font-bold text-3xl mb-3">Newsletter</h2>
               <p className="">Stay Updated</p>
               
                 <div className="flex">
                   <p className="mt-2" >
                     <input 
                       type="text"
                       className="placeholder-black "
                       placeholder="Email"
                     />
                     </p>
                     <p className="mt-4 ">
                         <i className="text-red-60 fas fa-arrow-right cursor-pointer "></i>
                       </p>
                   </div>
                 </div>
   
   {/* Newsletter section ended */}
             
             
   
             {/* Follow us section */}
             <div className="flex flex-col items-start w-1/3 ">
               <h4 className="text-white font-bold text-3xl mb-3">Follow Us</h4>
               <p className="text-muted">Let us connect ourself</p>
               <div className="flex justify-between mt-2">
                 <i className="mr-2 cursor-pointer fab fa-facebook-f"></i>
                 <i className="mr-2 cursor-pointer fab fa-instagram"></i>
                 <i className="mr-2 cursor-pointer fab fa-twitter"></i>
                 <i className="cursor-pointer fab fa-youtube"></i>
               </div>
             </div>
   
         </div>
             
      {/* About us, Newsletter, Follow us, Container  ended*/}

          
          
        </div>
        <div className="mt-24">
          <p className="text-sm ">
              Copyright ©2022 All rights reserved | This template is made with
              by <span className="text-pink-300 cursor-pointer">Weero Digital Library</span>
            </p>
          </div>
    </div>
      
    
  );
};

export default AboutUs;
