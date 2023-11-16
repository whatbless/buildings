import React from "react";
import { useDispatch } from "react-redux";
import {
  setName,
  setNumber,
  setStep,
  setAddition,
} from "../../redux/quizReducer";
import { Formik, Form, Field } from "formik";
import styles from "./Quiz.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import henryParty from "./../../images/henry-party.png";

function validateName(value: string) {
  let error;
  if (!value) {
    error = "Моим коллегам нужна эта информация!";
  }
  return error;
}

function validateNumber(value: string) {
  let error;
  if (!value) {
    error = "Моим коллегам нужна эта информация!";
  } else if (/^\d+$/.test(value)) {
  } else {
    error = "Вводи свой номер настоящий номер";
  }
  return error;
}

const Result = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <img
        className="w-56 h-56 absolute -left-48 -top-20"
        src={henryParty}
        alt="henry-image7"
      />
      <img
        style={{ transform: "scale(-1, 1)" }}
        className="w-56 h-56 absolute -right-48 top-20"
        src={henryParty}
        alt="henry-image7"
      />
      <h1 className="text-center">
        Отлично, все вопросы позади! Введи свое имя и номер телефона и нажимай
        кнопку "Отправить результаты"! Получив их, мои коллеги сделают
        персональную подборку объектов именно под твои запросы и потребности, и
        наш эксперт свяжется с тобой в ближайшее время!
      </h1>
      <Formik
        initialValues={{
          name: "",
          number: "",
          addition: "",
        }}
        onSubmit={(values) => {
          dispatch<any>(setName(values.name));
          dispatch<any>(setNumber(values.number));
          dispatch<any>(setAddition(values.addition));
          dispatch<any>(setStep(7));
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="w-full h-96 relative">
            <div className={styles.formBlock}>
              <Field
                className={styles.formInput}
                name="name"
                validate={validateName}
              />
              <span className={styles.formTitle}>Ваше имя</span>
              <div className={styles.error}>
                {errors.name && touched.name && <div>{errors.name}</div>}
              </div>
            </div>
            <div className={styles.formBlock}>
              <Field
                className={styles.formInput}
                name="number"
                validate={validateNumber}
              />
              <span className={styles.formTitle}>
                Ваш номер телефона {"( WhatsApp )"}
              </span>
              <div className={styles.error}>
                {errors.number && touched.number && <div>{errors.number}</div>}
              </div>
            </div>
            <div className={styles.inputBlock}>
              <Field
                className={styles.formArea}
                name="addition"
                component="textarea"
              />
              <span className={styles.formTitle}>
                Дополнительная информация
              </span>
            </div>
            <div className={styles.error}>
              {errors.addition && touched.addition && (
                <div>{errors.addition}</div>
              )}
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => {
                  dispatch<any>(setStep(5));
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} /> Назад
              </button>
              <button className={styles.button} type="submit">
                Далее <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Result;
