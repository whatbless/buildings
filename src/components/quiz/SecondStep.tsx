import React from "react";
import { useDispatch } from "react-redux";
import { setPropertyType, setStep } from "../../redux/quizReducer";
import { propertyTypeVariants } from "../../types/types";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function checkedValidation(values: any) {
  console.log(values);
  let error;
  if (values.length === 0) {
    error = "no one params choosen";
  }
  return error;
}

const SecondStep = () => {
  const variants: Array<propertyTypeVariants> = [
    { var: "дом" },
    { var: "коттедж" },
    { var: "вилла" },
    { var: "квартира" },
    { var: "квартира с двориком" },
  ];

  const dispatch = useDispatch();
  return (
    <div>
      <h1 className={styles.header}>Выберите вид недвижимости</h1>
      <Formik
        initialValues={{
          propertyType: [],
        }}
        onSubmit={(values: any) => {
          console.log(values);
          dispatch<any>(setPropertyType(values.propertyType));
          dispatch<any>(setStep(3));
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form name="FC" className="w-full">
            {variants.map((variant) => (
              <div>
                <div className={styles.formCheckboxWrapper}>
                  <Field
                    className={styles.formCheckbox}
                    name="propertyType"
                    type="checkbox"
                    value={variant.var}
                    validate={checkedValidation}
                  />
                  <p className={styles.formCheckboxTitle}>{variant.var}</p>
                </div>
              </div>
            ))}
            <div className={styles.error}>
              {errors.propertyType && touched.propertyType && (
                <div>{errors.propertyType}</div>
              )}
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => {
                  dispatch<any>(setStep(1));
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

export default SecondStep;
