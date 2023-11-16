import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegionForm, setStep } from "../../redux/quizReducer";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import henryLove from "./../../images/henry-love.png";

function requireValidate(value: string) {
  let error;
  if (!value) {
    error = "Мне нужны районы мечты, чтобы подобрать недвижимость мечты!";
  }
  return error;
}

const FirstStep = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative w-full h-full">
      <div className="w-full flex flex-col items-center">
        <h1>Я рад что ты остаешься со мной, ответим на несколько вопросов</h1>
        <img className="w-56 h-56" src={henryLove} alt="henry-image2" />
      </div>
      <h1 className="text-center">
        Укажи район, в котором ты бы хотел{"(а)"} себе недвижимость
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
            <Form>
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
                <button
                  className={styles.backButton}
                  onClick={() => dispatch<any>(setStep(0))}
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
    </div>
  );
};

export default FirstStep;
