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
import henryV from "./../../images/henry-v.png";

const validations = [
  "Наличие стоянки",
  "Наличие балкона",
  "Наличие комнаты безопасности",
];

function requireValidate(value: string) {
  let error;
  if (!value) {
    error = "Укажи бюджет. Это важно для меня!";
  }
  return error;
}

const FourthStep = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full relative">
      <h1 className="text-left text-lg mb-8">Бюджет</h1>
      <Formik
        initialValues={{
          vals: [],
          minPrice: "",
          maxPrice: "",
        }}
        onSubmit={(values: any) => {
          console.log(values);
          dispatch<any>(setPrice([values.minPrice, values.maxPrice]));
          dispatch<any>(setValidations(values.vals));
          dispatch<any>(setStep(5));
        }}
      >
        {({ errors, touched, isValidating }) => (
          <div className="w-full flex justify-between items-center">
            <Form>
              <div className={styles.priceWrap}>
                <div className={styles.formPriceWrapper}>
                  <p className={styles.formPriceTitle}>от</p>
                  <Field
                    className={styles.formPrice}
                    name="minPrice"
                    validate={requireValidate}
                  />
                </div>
                <div className={styles.formPriceWrapper}>
                  <p className={styles.formPriceTitle}>до</p>
                  <Field
                    className={styles.formPrice}
                    name="maxPrice"
                    validate={requireValidate}
                  />
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
                {(errors.maxPrice && touched.maxPrice && (
                  <div>{errors.minPrice}</div>
                )) ||
                  (errors.minPrice && touched.minPrice && (
                    <div>{errors.minPrice}</div>
                  ))}
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
            <div>
              <img className="w-56 h-56" src={henryV} alt="henry-image5" />
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FourthStep;
