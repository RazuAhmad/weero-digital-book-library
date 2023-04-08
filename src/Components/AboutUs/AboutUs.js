import React from "react";
import "./AboutUs.css";
// import logo from "../../images/weero-dital-icon.jpg"
import Typewriter from "typewriter-effect";
const AboutUs = () => {
  return (
    <div className=" text-white footer_container text-xl">
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="gradient__text">
          <Typewriter
            options={{
              strings: ["Do you want to step", "into the future?"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>Request Early Access</p>
      </div>

     
      <div className="flex flex-col items-center">
            
          <div className="flex justify-between">
          <div className=" w-1/3">
            <h1 class="text-light">About us</h1>
            <p class="text-muted">
              Lorem ipsum dolar submit amet, consectetur adipisicing elit. Earum
              maxime ea similique illum corrupti
            </p>
            
          </div>
          <div className="">
            <h2 className="">Newsletter</h2>
            <p className="">Stay Updated</p>
            <form class="form-inline">
              <di class="col pl">
                <div class="input-group pr-5">
                  <input 
                    type="text"
                    className="text-white bg-slate-400"
                    placeholder="Email"
                  />
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </di>
            </form>
          </div>
          <div class="col-md-2 col-sm-12">
            <h4 class="text-light">Follow Us</h4>
            <p class="text-muted">Let us connect ourself</p>
            <div class="flex justify-between">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>
          </div>
      

          <div>
          <p class="text-sm">
              Copyright ©2022 All rights reserved | This template is made with
              by <span color="">Abdur Rahman</span>
            </p>
          </div>
          
        </div>
      
    
      
    </div>
  );
};

export default AboutUs;
