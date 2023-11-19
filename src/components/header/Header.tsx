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
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={
        scroll < 200
          ? "text-regal-blue z-20 fixed w-full flex justify-center backdrop-blur-sm duration-500"
          : "text-regal-blue z-20 fixed w-full flex justify-center bg-white duration-500"
      }
    >
      <nav className="container mx-auto flex xl:flex-row flex-col items-start px-10 relative">
        <div className="flex justify-between">
          <a href="/">
            <img className="w-52" src={logo}></img>
          </a>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <div className="flex xl:flex-row flex-col items-center 2xl:ml-60 xl:ml-32 ml-0">
            {navs.map((nav) => (
              <li className="xl:mb-0 mb-3">
                <a
                  href={nav.anchor}
                  className={
                    scroll < 200
                      ? "mx-3.5 font-bold px-2.5 py-1 2xl:text-lg text-md rounded-none uppercase cursor-pointer text-white hover:border-regal-red hover:border-b-2"
                      : "mx-3.5 font-bold px-2.5 2xl:text-lg text-md py-1 rounded-none uppercase cursor-pointer text-regal-red hover:border-regal-red hover:border-b-2"
                  }
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </div>
          <div className="flex flex-row xl:mb-0 mb-3 items-center">
            {socials.map((social) => (
              <li className="w-full flex justify-center">
                <a
                  href={social.link}
                  className="w-16 mx-5 duration-300 hover:-translate-y-1"
                >
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
