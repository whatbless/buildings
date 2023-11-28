import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactSlider from "react-slider";
import { setStep, setFloorRange } from "../../redux/quizReducer";
import "./../../index.css";
import styles from "./Quiz.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import henryGrin from "./../../images/henry-grin.png";

const min = 1;
const max = 25;

const FifthStep = () => {
  const [values, setValues] = useState([min, max]);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch<any>(setFloorRange(values));
    dispatch<any>(setStep(6));
  };

  return (
    <div className="w-full relative h-full">
      <h1 className="md:text-lg text-md text-center mb-5">Этаж</h1>
      <div className={styles.values}>
        <h4>от</h4>
        <h4>до</h4>
      </div>
      <ReactSlider
        className={"slider"}
        trackClassName="slider-track"
        min={min}
        max={max}
        value={values}
        onChange={setValues}
        step={1}
      />
      <div className={styles.values}>
        <h4>{values[0]}</h4>
        <h4>{values[1]}</h4>
      </div>
      <div className="w-full flex 2xl:flex-col lg:flex-row md:flex-row flex-col items-center">
        <img
          className="md:w-60 md:h-60 w-36 h-36"
          src={henryGrin}
          alt="henry-image6"
        />
        <p className="text-center md:text-lg text-md">
          Мда уж, достаточно философский вопрос. Если тебе без разницы на каком
          этаже жить, то нажимай далее, мои коллеги сами разберутся
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.backButton}
          onClick={() => {
            dispatch<any>(setStep(4));
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Назад
        </button>
        <button className={styles.button} onClick={handleClick}>
          Далее <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default FifthStep;
