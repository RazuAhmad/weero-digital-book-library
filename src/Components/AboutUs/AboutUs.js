import React from "react";
import "./AboutUs.css";
import logo from "../../images/weero-dital-icon.jpg"
import Typewriter from "typewriter-effect";
const AboutUs = () => {
  return (
    <div className=" text-white footer_text-font text-xl">
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
      <div className="flex justify-between px-10 py-5">
        <div className="content1">
          <h2>
            <img className="w-10" src={logo} alt="Logo" />
          </h2>
          <p>
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="content2">
          <h2>Links</h2>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="content3">
          <h2>Company</h2>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="content4">
          <h2>Get in touch</h2>
          <p>
            Crechterwoord K12 <br /> 182 DK Alknjkcb
          </p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
