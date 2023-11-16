import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactSlider from "react-slider";
import { setStep, setFloorRange } from "../../redux/quizReducer";
import "./../../index.css";
import styles from "./Quiz.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const min = 1;
const max = 45;

const FifthStep = () => {
  const [values, setValues] = useState([min, max]);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch<any>(setFloorRange(values));
    dispatch<any>(setStep(6));
  };

  return (
    <div>
      <h1 className={styles.header}>Этаж</h1>
      <div className={styles.values}>
        <h4 className={styles.value}>от</h4>
        <h4 className={styles.value}>до</h4>
      </div>
      <ReactSlider
        className={"slider"}
        min={min}
        max={max}
        value={values}
        onChange={setValues}
        step={1}
      />
      <div className={styles.values}>
        <h4 className={styles.value}>{values[0]}</h4>
        <h4 className={styles.value}>{values[1]}</h4>
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
