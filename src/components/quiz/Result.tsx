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
    <div className="relative h-full">
      <img
        className="md:w-60 md:h-60 w-36 h-36 absolute md:-left-36 -left-20 md:-top-40 -top-0 z-10"
        src={henryParty}
        alt="henry-image7"
      />
      <img
        style={{ transform: "scale(-1, 1)" }}
        className="md:w-60 md:h-60 w-36 h-36 absolute md:-right-36 -right-20 md:top-36 top-52 z-10"
        src={henryParty}
        alt="henry-image7"
      />
      <h1 className="text-center md:text-lg sm:text-md text-sm px-5">
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
          <Form>
            <div className={styles.formBlock}>
              <Field
                className="border-regal-blue border rounded-md w-full md:text-lg sm:text-md text-sm bg-white font-extralight px-3.5 py-2.5 resize-none"
                name="name"
                validate={validateName}
              />
              <span className="absolute md:text-lg sm:text-md text-sm z-0 left-7 -top-2.5 bg-white px-2 text-regal-blue font-extralight">
                Ваше имя
              </span>
              <div className="text-regal-red font-extralight md:text-lg text-sm text-center">
                {errors.name && touched.name && <div>{errors.name}</div>}
              </div>
            </div>
            <div className={styles.formBlock}>
              <Field
                className="border-regal-blue border rounded-md w-full md:text-lg sm:text-md text-sm bg-white font-extralight px-3.5 py-2.5 resize-none"
                name="number"
                validate={validateNumber}
              />
              <span className="absolute md:text-lg sm:text-md text-sm z-0 left-7 -top-2.5 bg-white px-2 text-regal-blue font-extralight">
                Ваш номер телефона {"( WhatsApp )"}
              </span>
              <div className="text-regal-red font-extralight md:text-lg sm:text-md text-sm text-center">
                {errors.number && touched.number && <div>{errors.number}</div>}
              </div>
            </div>
            <div className={styles.inputBlock}>
              <Field
                className="border-regal-blue border rounded-md w-full md:text-lg sm:text-md text-sm bg-white font-extralight px-3.5 py-2.5 h-24 resize-none box-border"
                name="addition"
                component="textarea"
              />
              <span className="absolute md:text-lg sm:text-md text-sm z-0 left-7 -top-2.5 bg-white px-2 text-regal-blue font-extralight">
                Дополнительная информация
              </span>
            </div>
            <div className="text-regal-red font-extralight md:text-lg sm:text-md text-sm text-center">
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
