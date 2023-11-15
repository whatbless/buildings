import React from "react";
import { useDispatch } from "react-redux";
import { setName, setNumber, setStep } from "../../redux/quizReducer";
import { Formik, Form, Field } from "formik";
import styles from "./Quiz.module.css";

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
  } else if (!/^\d{11}$/.test(value)) {
    error = "Invalid phone number. Example: 89329325555";
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
        }}
        onSubmit={(values) => {
          dispatch<any>(setName(values.name));
          dispatch<any>(setNumber(values.number));
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
            <div className={styles.buttonWrapper}>
              <button className={styles.button} type="submit">
                Отправить ответы!
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Result;
