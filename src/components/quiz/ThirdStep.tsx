import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactSlider from "react-slider";
import { setRoomRange, setStep } from "../../redux/quizReducer";
import "./../../index.css";
import styles from "./Quiz.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import henryThink from "./../../images/henry-think.png";

const min = 1;
const max = 9;

const ThirdStep = () => {
  const [values, setValues] = useState([min, max]);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch<any>(setRoomRange(values));
    dispatch<any>(setStep(4));
  };

  return (
    <div className="relative w-full h-full">
      <h1 className="md:text-lg text-md text-center mb-8">Количество комнат</h1>
      <div className={styles.values}>
        <h4 className="font-extralight md:text-lg text-md">от</h4>
        <h4 className="font-extralight md:text-lg text-md">до</h4>
      </div>
      <ReactSlider
        className={"slider"}
        min={min}
        max={max}
        value={values}
        onChange={setValues}
        step={0.5}
      />
      <div className={styles.values}>
        <h4 className="font-extralight md:text-lg text-md">{values[0]}</h4>
        <h4 className="font-extralight md:text-lg text-md">{values[1]}</h4>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.backButton}
          onClick={() => {
            dispatch<any>(setStep(2));
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Назад
        </button>
        <button className={styles.button} onClick={handleClick}>
          Далее <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="md:w-60 md:h-60 w-36 h-36"
          src={henryThink}
          alt="henry-image4"
        />
        <p className="text-center md:text-lg text-md">
          Хммм... сколько же комнат выбрать...
        </p>
      </div>
    </div>
  );
};

export default ThirdStep;
