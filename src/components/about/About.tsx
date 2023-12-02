import React from "react";
import real from "./../../images/real.jpeg";
import sign from "./../../images/sign.png";
import diploma from "./../../images/diploma.png";
import logo from "./../../images/vert-logo.png";

const About = () => {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pb-10 pt-32">
      <div id="about" className="absolute -top-28"></div>
      <div className="absolute w-full flex justify-center -top-24">
        <div className="w-5/6 h-1 bg-regal-blue rounded-full absolute top-24"></div>
        <img className="z-10" src={sign} alt="sign-image" />
      </div>
      <div className="container mx-auto px-10">
        <h1 className="md:text-4xl text-3xl w-full text-center pb-5 text-regal-blue">
          О нас
        </h1>
        <p className="md:text-lg texl-md text-center w-full pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in
          dolore ab. Voluptates quidem quod, accusamus ullam, adipisci aut
          fugiat
        </p>
        <div className="flex justify-center">
          <div className="w-1/2 px-32">
            <img src={diploma} alt="diploma-image" />
          </div>
          <div className="w-1/2 px-44">
            <img src={real} alt="about-image" />
            <div className="flex h-max items-center justify-between">
              <img className="w-40" src={logo} alt="logo" />
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
