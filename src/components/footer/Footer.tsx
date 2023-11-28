import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import whatsapp from "./../../images/whatsapp.png";
import instagram from "./../../images/instagram.png";
import facebook from "./../../images/facebook.png";
import logo from "./../../images/logo.png";

const Footer = () => {
  const navs = [
    { title: "о нас", anchor: "#about" },
    { title: "объекты", anchor: "#objects" },
    { title: "получить консультацию", anchor: "#question" },
  ];

  const rules = [
    { title: "Правила индивидуального посещения" },
    { title: "Правила группового пользования" },
    { title: "Правила конфиденциальности" },
  ];

  return (
    <footer className="w-full py-10">
      <div className="container mx-auto px-5 flex xl:flex-row flex-col xl:space-y-0 sm:space-y-12 space-y-5 justify-center 2xl:space-x-20 xl:space-x-10 items-center">
        <div className="flex 2xl:space-x-20 sm:flex-row flex-col sm:space-y-0 space-y-5 xl:space-x-10 xl:justify-normal justify-between items-center w-full">
          <div className="w-full flex flex-col sm:items-start justify-center items-center">
            <img className="w-40" src={logo} alt="logo" />
            <div className="text-sm font-extralight sm:text-left text-center text-regal-blue">
              Здесь каждый становится создателем своего будущего
            </div>
          </div>
          <div className="lg:w-1/3 w-1/2">
            <ul className="space-y-3 flex flex-col xl:pt-0 md:pt-12 sm:pt-7 pt-0">
              {navs.map((nav) => (
                <a
                  href={nav.anchor}
                  className="w-full uppercase text-sm font-bold xl:text-left sm:text-right text-center text-regal-red hover:text-black cursor-pointer"
                >
                  {nav.title}
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex 2xl:space-x-20 sm:flex-row flex-col xl:space-x-10 xl:justify-normal items-center justify-between w-full">
          <div>
            <ul>
              {rules.map((rule) => (
                <li className="leading-10 sm:text-left text-center text-regal-blue hover:text-black cursor-pointer">
                  {rule.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex flex-row">
              <img className="w-11 mx-3 my-5" src={facebook} alt="facebook" />
              <img className="w-11 mx-3 my-5" src={instagram} alt="instagram" />
              <img className="w-11 mx-3 my-5" src={whatsapp} alt="twitter" />
            </div>
            <div className="text-regal-blue text-lg text-center">
              +995 595 250 141
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
