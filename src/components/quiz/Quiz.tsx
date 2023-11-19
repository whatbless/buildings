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
import Bonus from "./Bonus";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const customStyles = {
  width: "1000px",
  height: "650px",
  display: "flex",
  fontWeight: "300",
  flexDirection: "column",
  alignItems: "center",
  background: "white",
  boxShadow: "inset 0px 0px 20px 2px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

const Quiz = () => {
  const step: number = useSelector((state: RootState) => state.quiz.step);

  return (
    <div className="h-650 2xl:w-[1036px] lg:w-[780px] mx-auto flex flex-col items-center bg-white overflow-hidden">
      <div className={styles.progressWrap}>
        <h1 className="md:text-lg sm:text-md text-sm font-extralight">
          <FontAwesomeIcon
            icon={faClipboard}
            className="pr-4 text-2xl text-regal-blue"
          />
          Пройдите опрос и получите{" "}
          <span className="text-regal-blue">бонус</span> от наших экспертов!
        </h1>
        {step > 0 && step < 6 && <p className={styles.steps}>{step}/5</p>}
        <div className={styles.progress}>
          <div
            style={{ width: `${(step - 1) * 20}%` }}
            className={styles.progress__inner}
          ></div>
        </div>
      </div>
      <div className="w-full h-full md:px-10 md:py-10 px-2 py-10">
        {step === 0 && <Start />}
        {step === 1 && <FirstStep />}
        {step === 2 && <SecondStep />}
        {step === 3 && <ThirdStep />}
        {step === 4 && <FourthStep />}
        {step === 5 && <FifthStep />}
        {step === 6 && <Result />}
        {step === 7 && <Bonus />}
        {step === 8 && <End />}
      </div>
    </div>
  );
};

export default Quiz;
