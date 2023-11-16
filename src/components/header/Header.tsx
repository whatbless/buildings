import React from "react";
import logo from "./../../images/logo.png";
import facebook from "./../../images/facebook.png";
import instagram from "./../../images/instagram.png";
import whatsapp from "./../../images/whatsapp.png";
import styles from "./Header.module.css";

const Header = () => {
  const navs = [
    { title: "О нас" },
    { title: "Получить консультацию" },
    { title: "Контакты" },
  ];

  const socials = [
    { alt: "facebook", img: facebook, link: "/" },
    { alt: "instagram", img: instagram, link: "/" },
    { alt: "whatsapp", img: whatsapp, link: "/" },
  ];

  return (
    <header className="text-regal-blue z-20 fixed w-full flex justify-center backdrop-blur-sm">
      <div className="container mx-auto flex flex-row justify-between px-20">
        <a href="/" className="w-40">
          <img src={logo}></img>
        </a>
        <div className="flex items-center">
          {navs.map((nav) => (
            <h1 className={styles.navigation}>{nav.title}</h1>
          ))}
        </div>
        <div className="flex items-center">
          {socials.map((social) => (
            <a href={social.link} className="w-14 mx-5">
              <img src={social.img} alt={social.alt} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
