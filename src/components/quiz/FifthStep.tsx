import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactSlider from "react-slider";
import { setStep, setFloorRange } from "../../redux/quizReducer";
import "./../../index.css";
import styles from "./Quiz.module.css";

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
      <h3 className={styles.difference}>
        Диапазон: {Math.abs(values[0] - values[1])}
      </h3>
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
        <div className={styles.button} onClick={handleClick}>
          Следущий вопрос
        </div>
      </div>
    </div>
  );
};

export default FifthStep;
