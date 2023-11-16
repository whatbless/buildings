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
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Quiz = () => {
  const step: number = useSelector((state: RootState) => state.quiz.step);

  return (
    <div className={styles.wrapper}>
      <div className={styles.progressWrap}>
        <h1 className="text-lg font-extralight">
          <FontAwesomeIcon
            icon={faClipboard}
            className="pr-4 text-2xl text-regal-blue"
          />
          Пройдите опрос и получите{" "}
          <span className="text-regal-blue ">бесплатную консультацию</span> от
          наших экспертов!
        </h1>
        {step > 0 && step < 7 && <p className={styles.steps}>{step}/6</p>}
        <div className={styles.progress}>
          <div
            style={{ width: `${step * 14.29}%` }}
            className={styles.progress__inner}
          ></div>
        </div>
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
