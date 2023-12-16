import React from "react";
import styles from "./Quiz.module.css";
import henryHeart from "./../../images/henry-heart.png";
import { setStep } from "../../redux/quizReducer";
import { useDispatch } from "react-redux";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const End = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full flex flex-col relative items-center">
      <img
        className="md:w-60 md:h-60 w-36 h-36"
        src={henryHeart}
        alt="henry-image8"
      />
      <h1 className="text-center md:text-lg sm:text-md text-sm">
        תודה! נהניתי מחברתך. אני סומך על חבריי לעבודה – הם מומחים בתחומם וימצאו
        את נכס חלומותיך בקלות! המומחה שלנו יצור איתך קשר בקרוב כדי להציג בפניך
        את האפשרויות הטובות ביותר
      </h1>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.backButton}
          onClick={() => {
            dispatch<any>(setStep(8));
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          חזור
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch<any>(setStep(0))}
        >
          Пройти еще раз <FontAwesomeIcon icon={faRepeat} />
        </button>
      </div>
    </div>
  );
};

export default End;
