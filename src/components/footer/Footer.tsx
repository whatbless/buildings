import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import whatsapp from "./../../images/whatsapp.png";
import instagram from "./../../images/instagram.png";
import facebook from "./../../images/facebook.png";
import logo from "./../../images/logo.png";

const Footer = () => {
  const navs = [
    { title: "о нас", anchor: "#about" },
    { title: "получить консультацию", anchor: "#question" },
    { title: "контакты", anchor: "#contacts" },
  ];

  const rules = [
    { title: "Правила индивидуального посещения" },
    { title: "Правила группового пользования" },
    { title: "Правила конфиденциальности" },
  ];

  return (
    <footer className="w-full absolute xl:pt-[600px] sm:pt-[670px] bg-pastel-grey pt-[765px] xl:min-h-max min-h-full -z-10">
      <div className="container mx-auto px-5 flex xl:flex-row flex-col xl:space-y-0 sm:space-y-12 space-y-5 justify-center 2xl:space-x-20 xl:space-x-10 h-60 items-center">
        <div className="flex 2xl:space-x-20 sm:flex-row flex-col sm:space-y-0 space-y-5 xl:space-x-10 xl:justify-normal justify-between items-center w-full">
          <div className="w-full flex flex-col sm:items-start justify-center items-center">
            <img className="w-40" src={logo} alt="logo" />
            <div className="text-sm font-extralight text-regal-blue">
              Здесь каждый становится создателем своего будущего
            </div>
          </div>
          <div className="lg:w-1/3 w-1/2">
            <ul>
              {navs.map((nav) => (
                <li className="w-full uppercase text-sm font-bold leading-9 xl:text-left text-center text-regal-red hover:text-white cursor-pointer">
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex 2xl:space-x-20 sm:flex-row flex-col xl:space-x-10 xl:justify-normal items-center justify-between w-full">
          <div>
            <ul>
              {rules.map((rule) => (
                <li className="leading-10 sm:text-left text-center text-regal-blue font-extralight hover:text-white cursor-pointer">
                  {rule.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex flex-row">
              <img
                className="w-16 h-16 p-px mx-2 my-5 rounded-full"
                src={facebook}
                alt="facebook"
              />
              <img
                className="w-16 h-16 mx-2 my-5"
                src={instagram}
                alt="instagram"
              />
              <img
                className="w-16 h-16 mx-2 my-5"
                src={whatsapp}
                alt="twitter"
              />
            </div>
            <div className="font-extralight text-regal-blue text-lg text-center mb-5">
              +995 595 250 141
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;