import React from "react";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/quizReducer";
import styles from "./Quiz.module.css";

const Start = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className={styles.header}>
        «Ответьте на вопросы и получите подборку объектов недвижимости, которая
        подойдёт именно вам! Получив ответы на эти вопросы, мы будем знать какие
        объекты вам подойдут лучше всего».
      </h1>
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
