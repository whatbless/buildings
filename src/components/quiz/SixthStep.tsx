import React from "react";
import { useDispatch } from "react-redux";
import { setPropertyFor, setStep } from "../../redux/quizReducer";
import { propertyTypeVariants } from "../../types/types";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import henryO from "./../../images/henry-o.png";

function checkedValidation(values: any) {
  console.log(values);
  let error;
  if (values.length === 0) {
    error = "Думаю здесь найдется нужный параметр.";
  }
  return error;
}

const SixthStep = () => {
  const variants: Array<propertyTypeVariants> = [
    { var: "для проживания" },
    { var: "для инвестиций" },
    { var: "для проживания и инвестиций" },
    { var: "для чего-то другого" },
  ];

  const dispatch = useDispatch();
  return (
    <div className="relative h-full w-full">
      <h1 className=" md:text-lg text-sm text-center mb-8">
        Последний вопросик! Для каких целей тебе нужна недвижимость?
      </h1>
      <Formik
        initialValues={{
          propertyFor: [],
        }}
        onSubmit={(values: any) => {
          console.log(values);
          dispatch<any>(setPropertyFor(values.propertyFor));
          dispatch<any>(setStep(7));
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <div className="flex w-full justify-between items-center">
              <div>
                {variants.map((variant) => (
                  <div>
                    <div className="md:text-lg text-md flex text-regal-blue">
                      <Field
                        className="mr-5"
                        name="propertyType"
                        type="checkbox"
                        value={variant.var}
                        validate={checkedValidation}
                      />
                      <p className={styles.formCheckboxTitle}>{variant.var}</p>
                    </div>
                  </div>
                ))}
              </div>
              <img
                className="md:w-60 md:h-60 w-36 h-36"
                src={henryO}
                alt="henry-image3"
              />
            </div>
            <div className="text-regal-red md:text-lg text-sm text-center">
              {errors.propertyFor && touched.propertyFor && (
                <div>{errors.propertyFor}</div>
              )}
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => {
                  dispatch<any>(setStep(5));
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                חזור
              </button>
              <button className={styles.button} type="submit">
                להמשיך
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SixthStep;
