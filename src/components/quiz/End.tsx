import React from "react";
import styles from "./Quiz.module.css";
import henryHeart from "./../../images/henry-heart.png";

const End = () => {
  return (
    <div className="w-full h-70 flex flex-col items-center justify-center">
      <img
        className="md:w-60 md:h-60 w-36 h-36"
        src={henryHeart}
        alt="henry-image8"
      />
      <h1 className="text-center md:text-lg sm:text-md text-sm">
        «Спасибо, что уделил время моему опросу! Я знаю своих коллег, они
        профессионалы своего дела, думаю им не сложно будет подобрать тебе
        недвижимость мечты! Наш эксперт скоро свяжется с тобой чтобы
        предоставить вам только самые лучшие варианты!»
      </h1>
    </div>
  );
};

export default End;
