import real from "./../../images/real.webp";
import diploma from "./../../images/diploma.webp";
import logo from "./../../images/vert-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="relative py-10">
      <div id="about" className="absolute -top-28"></div>
      <div className="container mx-auto px-10">
        <h1 className="md:text-4xl text-3xl w-full text-center pb-10 text-regal-blue">
          מי אנחנו
        </h1>
        <div className="flex md:flex-row flex-col justify-center md:items-start items-center">
          <div className="md:w-1/2 w-full 2xl:px-32 xl:px-24 lg:px-10 px-0">
            <img
              loading="lazy"
              src={diploma}
              alt="פרסים בישראל"
              className="w-full h-full"
            />
          </div>
          <div className="md:w-1/2 w-full 2xl:px-44 xl:px-36 lg:px-20 md:px-9 px-0">
            <img className="md:block hidden" src={real} alt="איש עסקים" />
            <div className="flex h-max items-center justify-between">
              <img
                className="2xl:w-36 lg:w-32 md:w-28 sm:w-40 w-32 h-full"
                src={logo}
                alt="logo"
              />
              <div className="md:text-md text-sm font-bold text-regal-blue">
                <div>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      className="text-regal-red mr-3 text-xl"
                      icon={faSquare}
                    />
                    אלכס טרטקובסקי
                  </p>
                  <p className="my-1 font-bold">
                    <FontAwesomeIcon
                      className="text-regal-red mr-3 text-xl"
                      icon={faLocationDot}
                    />
                    רחי הרצל 20, חיפה
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="text-regal-red mr-3 text-xl"
                      icon={faPhone}
                    />
                    0586557877
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
