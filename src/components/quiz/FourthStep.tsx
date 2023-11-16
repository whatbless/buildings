import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactSlider from "react-slider";
import { setStep, setPrice, setValidations } from "../../redux/quizReducer";
import "./../../index.css";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const validations = [
  "Наличие стоянки",
  "Наличие балкона",
  "Наличие комнаты безопасности",
];

const FourthStep = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className={styles.header}>Цена</h1>
      <Formik
        initialValues={{
          vals: [],
          minPrice: 0,
          maxPrice: 1000000,
        }}
        onSubmit={(values: any) => {
          console.log(values);
          dispatch<any>(setPrice([values.minPrice, values.maxPrice]));
          dispatch<any>(setValidations(values.vals));
          dispatch<any>(setStep(5));
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="w-full">
            <div className={styles.priceWrap}>
              <div className={styles.formPriceWrapper}>
                <p className={styles.formPriceTitle}>от</p>
                <Field className={styles.formPrice} name="minPrice" />
              </div>
              <div className={styles.formPriceWrapper}>
                <p className={styles.formPriceTitle}>до</p>
                <Field className={styles.formPrice} name="maxPrice" />
              </div>
            </div>
            {validations.map((val) => (
              <div>
                <div className={styles.formCheckboxWrapper}>
                  <Field
                    className={styles.formCheckbox}
                    name="vals"
                    type="checkbox"
                    value={val}
                  />
                  <p className={styles.formCheckboxTitle}>{val}</p>
                </div>
              </div>
            ))}
            <div className={styles.error}>
              {errors.vals && touched.vals && <div>{errors.vals}</div>}
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => {
                  dispatch<any>(setStep(3));
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

export default FourthStep;
