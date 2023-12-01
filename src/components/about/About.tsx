import React from "react";
import real from "./../../images/real.jpeg";
import sign from "./../../images/sign.png";
import diploma1 from "./../../images/diploma1.webp";
import diploma2 from "./../../images/diploma2.webp";
import diploma3 from "./../../images/diploma3.webp";
import diploma4 from "./../../images/diploma4.webp";
import diploma5 from "./../../images/diploma5.webp";
import diploma6 from "./../../images/diploma6.webp";
import diploma7 from "./../../images/diploma7.webp";
import { diplomaType } from "../../types/types";

const diplomas: Array<diplomaType> = [
  { src: diploma1, alt: "diploma1" },
  { src: diploma2, alt: "diploma2" },
  { src: diploma3, alt: "diploma3" },
  { src: diploma4, alt: "diploma4" },
  { src: diploma5, alt: "diploma5" },
  { src: diploma6, alt: "diploma6" },
  { src: diploma7, alt: "diploma7" },
];

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
        <div className="flex justify-center items-center">
          <div className="w-1/2">
            {diplomas.map((diploma: diplomaType, index: number) =>
              index % 2 != 0 ? (
                <div className="w-full flex justify-end">
                  <img
                    className="mb-5 rounded-xl border-2 border-regal-blue w-64 mr-5"
                    src={diploma.src}
                    alt={diploma.alt}
                  />
                </div>
              ) : (
                <img
                  className="mb-5 rounded-xl border-2 border-regal-blue w-64"
                  src={diploma.src}
                  alt={diploma.alt}
                />
              )
            )}
          </div>
          <img className="mb-20 w-1/2 h-max" src={real} alt="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
