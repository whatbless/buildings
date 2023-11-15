import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import styles from "./Quiz.module.css";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import Result from "./Result";
import Start from "./Start";
import End from "./End";

const Quiz = () => {
  const step: number = useSelector((state: RootState) => state.quiz.step);

  return (
    <div className={styles.wrapper}>
      <div className={styles.progress}>
        <div
          style={{ width: `${(step + 1) * 12.5}%` }}
          className={styles.progress__inner}
        ></div>
      </div>
      <div className={styles.content}>
        {step === 0 && <Start />}
        {step === 1 && <FirstStep />}
        {step === 2 && <SecondStep />}
        {step === 3 && <ThirdStep />}
        {step === 4 && <FourthStep />}
        {step === 5 && <FifthStep />}
        {step === 6 && <Result />}
        {step === 7 && <End />}
      </div>
    </div>
  );
};

export default Quiz;
