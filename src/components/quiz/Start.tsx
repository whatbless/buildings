import React from "react";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/quizReducer";
import styles from "./Quiz.module.css";
import henryHi from "./../../images/henry-hi.png";
import hand from "./../../images/hand.png";

const Start = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full relative h-full">
      <div className="w-full h-max flex justify-center">
        <img
          className="md:w-60 md:h-60 w-36 h-36"
          src={henryHi}
          alt="henry-image1"
        />
        <h1 className="text-left md:text-lg sm:text-md text-sm flex items-center pl-10">
          Привет, меня зовут Генри, я твой помощник на время этого небольшого
          опроса. Ответь на вопросы и мои коллеги сделают тебе персональную
          подборку объектов недвижимости, которая подойдёт именно тебе!
        </h1>
      </div>
      <div className="w-full h-64 relative">
        <p className="absolute md:text-lg sm:text-md text-sm md:bottom-20 sm:bottom-0 bottom-5 right-0">
          Нажимай на кнопку и проходи скорее мой опрос!
        </p>
        <img
          className="md:w-28 md:h-28 w-20 h-20 absolute md:-bottom-8 sm:-bottom-24 -bottom-20 right-64"
          src={hand}
          alt="hand-image"
        />
      </div>
      <div className={styles.firstButtonWrapper}>
        <div
          className={styles.button}
          onClick={() => dispatch<any>(setStep(1))}
        >
          Ответить на вопросы
        </div>
      </div>
    </div>
  );
};

export default Start;
