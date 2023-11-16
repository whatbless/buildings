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
        <img className="w-60 h-60" src={henryHi} alt="henry-image1" />
        <h1 className={styles.headerStart}>
          Привет, меня зовут Генри, я твой помощник на время этого небольшого
          опроса. Ответь на вопросы и мои коллеги сделают тебе персональную
          подборку объектов недвижимости, которая подойдёт именно тебе!
        </h1>
      </div>
      <div className="w-full h-64 relative">
        <p className="absolute bottom-20 right-0">
          Нажимай на кнопку и проходи скорее мой опрос!
        </p>
        <img
          className="w-28 h-28 absolute -bottom-8 right-64"
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
