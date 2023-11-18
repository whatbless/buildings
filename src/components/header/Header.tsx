import React, { useState } from "react";
import "./Header.css";
import logo from "./../../images/logo.png";
import facebook from "./../../images/facebook.png";
import instagram from "./../../images/instagram.png";
import whatsapp from "./../../images/whatsapp.png";

const navs = [
  { title: "О нас", anchor: "#about" },
  { title: "Получить консультацию", anchor: "#question" },
  { title: "Контакты", anchor: "#contacts" },
];

const socials = [
  { alt: "facebook", img: facebook, link: "/" },
  { alt: "instagram", img: instagram, link: "/" },
  { alt: "whatsapp", img: whatsapp, link: "/" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-regal-blue z-20 fixed w-full flex justify-center backdrop-blur-sm">
      <nav className="container mx-auto flex xl:flex-row flex-col items-start px-10 relative">
        <div className="flex justify-between">
          <a href="/">
            <img className="w-40" src={logo}></img>
          </a>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <div className="flex xl:flex-row flex-col items-center 2xl:ml-60 xl:ml-32">
            {navs.map((nav) => (
              <li>
                <a
                  href={nav.anchor}
                  className="mx-3.5 font-bold px-2.5 py-1 rounded-md uppercase cursor-pointer text-regal-red duration-300 hover:bg-pastel-grey"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </div>
          <div className="flex xl:flex-row flex-col items-center">
            {socials.map((social) => (
              <li className="w-full flex justify-center">
                <a href={social.link} className="w-14 mx-5">
                  <img src={social.img} alt={social.alt} />
                </a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
