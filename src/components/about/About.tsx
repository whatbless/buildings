import React from "react";
import real from "./../../images/real.jpeg";
import sign from "./../../images/sign.png";
import diploma from "./../../images/diploma.png";
import logo from "./../../images/vert-logo.png";

const About = () => {
  return (
    <section className="relative py-10">
      <div id="about" className="absolute -top-28"></div>
      <div className="container mx-auto px-10">
        <h1 className="md:text-4xl text-3xl w-full text-center pb-10">
          מי אנחנו
        </h1>
        <div className="flex md:flex-row flex-col justify-center md:items-start items-center">
          <div className="md:w-1/2 w-full 2xl:px-32 xl:px-24 lg:px-10 px-0">
            <img src={diploma} alt="diploma-image" />
          </div>
          <div className="md:w-1/2 w-full 2xl:px-44 xl:px-36 lg:px-20 md:px-9 px-0">
            <img className="md:block hidden" src={real} alt="about-image" />
            <div className="flex h-max items-center justify-between">
              <img
                className="2xl:w-40 lg:w-32 md:w-28 sm:w-40 w-32"
                src={logo}
                alt="logo"
              />
              <div>
                <p>+932138291381931</p>
                <p>адрес, адрес, дом 31</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
