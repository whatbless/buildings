import React from "react";
import { useDispatch } from "react-redux";
import { setPropertyType, setStep } from "../../redux/quizReducer";
import { propertyTypeVariants } from "../../types/types";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import henryHand from "./../../images/henry-hand.png";

function checkedValidation(values: any) {
  console.log(values);
  let error;
  if (values.length === 0) {
    error = "Думаю здесь найдется нужный параметр.";
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
    <div className="relative h-full w-full">
      <h1 className=" md:text-lg text-sm text-center mb-8">
        Так держать! Здесь тебе нужно определиться с видом недвижимости.
      </h1>
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
                src={henryHand}
                alt="henry-image3"
              />
            </div>
            <div className="text-regal-red md:text-lg text-sm text-center">
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
