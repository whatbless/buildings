import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactSlider from "react-slider";
import { setStep, setPrice, setValidations } from "../../redux/quizReducer";
import "./../../index.css";
import styles from "./Quiz.module.css";
import checker from "./../../images/check.png";

const min = 0;
const max = 10000000;

const FourthStep = () => {
  const [values, setValues] = useState([min, max]);

  const dispatch = useDispatch();

  const validations = [false, false, false];

  const handleParking = (e: any) => {
    validations[0] = e.target.checked;
  };
  const handleBalcony = (e: any) => {
    validations[1] = e.target.checked;
  };
  const handleSafetyRoom = (e: any) => {
    validations[2] = e.target.checked;
  };

  const handleClick = () => {
    dispatch<any>(setPrice(values));
    dispatch<any>(setValidations(validations));
    dispatch<any>(setStep(5));
  };

  return (
    <div>
      <h1 className={styles.header}>Цена</h1>
      <h3 className={styles.difference}>
        Диапазон: {Math.abs(values[0] - values[1])}
      </h3>
      <ReactSlider
        className={"slider"}
        min={min}
        max={max}
        value={values}
        onChange={setValues}
        step={100}
      />
      <div className={styles.values}>
        <h4 className={styles.value}>{values[0]}</h4>
        <h4 className={styles.value}>{values[1]}</h4>
      </div>
      <div className={styles.checkBlocks}>
        <div className={styles.checkBlock1}>
          <input
            className={styles.checkbox}
            type="checkbox"
            onChange={handleParking}
          />
          <div className={styles.div}>
            <img className={styles.image} src={checker} alt="check" />
            <span className={styles.span}>Наличие стоянки</span>
          </div>
        </div>
        <div className={styles.checkBlock2}>
          <input
            className={styles.checkbox}
            type="checkbox"
            onChange={handleBalcony}
          />
          <div className={styles.div}>
            <div className={styles.background}></div>
            <img className={styles.image} src={checker} alt="check" />
            <span className={styles.span}>Наличие балкона</span>
          </div>
        </div>
        <div className={styles.checkBlock3}>
          <input
            className={styles.checkbox}
            type="checkbox"
            onChange={handleSafetyRoom}
          />
          <div className={styles.div}>
            <img className={styles.image} src={checker} alt="check" />
            <span className={styles.span}>Наличие комнаты безопасности</span>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.button} onClick={handleClick}>
          Следущий вопрос
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
