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

function validateName(value: string) {
  let error;
  if (!value) {
    error = "Required field";
  }
  return error;
}

function validateNumber(value: string) {
  let error;
  if (!value) {
    error = "Required field";
  } else if (!/^\d{12}$/.test(value)) {
    error = "Invalid phone number. Example: 972 58 321 1234";
  }
  return error;
}

const Result = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className={styles.header}>
        Отлично, все вопросы пройдены! Введите ваше имя и номер телефона и
        нажмите кнопку "Отправить результаты"! Получив их, мы сделаем
        персональную подборку объектов именно под ваши запросы и потребности, а
        наш эксперт свяжется с вами !
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
