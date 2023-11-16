import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegionForm, setStep } from "../../redux/quizReducer";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function requireValidate(value: string) {
  let error;
  if (!value) {
    error = "Required field";
  }
  return error;
}

const FirstStep = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className={styles.header}>
        Укажите район, в котором бы вы хотели себе недвижимость
      </h1>
      <div>
        <Formik
          initialValues={{
            regions: "",
          }}
          onSubmit={(values: any) => {
            console.log(values);
            dispatch<any>(setRegionForm(values.regions));
            dispatch<any>(setStep(2));
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className="w-full">
              <div className={styles.inputWrapper}>
                <Field
                  validate={requireValidate}
                  className={styles.input}
                  name="regions"
                  component="input"
                  placeholder="Перечислите районы через запятую. Пример: Кировский, Октябрьский, Ленинский, Железнодорожный"
                />
              </div>
              <div className={styles.error}>
                {errors.regions && touched.regions && (
                  <div>{errors.regions}</div>
                )}
              </div>
              <div className={styles.buttonWrapper}>
                <button disabled={true} className={styles.disabledButton}>
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
    </div>
  );
};

export default FirstStep;
