import React from "react";
import henryEye from "./../../images/henry-eye.png";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { setStep, setEmail } from "../../redux/quizReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function validateEmail(value: string) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

const Bonus = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full relative">
      <h1 className="text-center md:text-lg sm:text-md text-sm">
        Я ценю время, которое ты уделил моему скромному тесту. За это я
        подготовил тебе небольшой подарок! Укажи свою электронную почту и я
        передам указание своим коллегам уведомлять тебя о каждом новом объекте.
        Так ты сможешь одним из первых получать информацию о новой недвижимости
        в нашем арсенале и найти для себя наилучший вариант!
      </h1>
      <div className="w-full flex justify-center">
        <img
          className="md:w-60 md:h-60 w-36 h-36"
          src={henryEye}
          alt="henry-image8"
        />
      </div>
      <Formik
        initialValues={{
          email: [],
        }}
        onSubmit={(values: any) => {
          dispatch<any>(setEmail(values.email));
          dispatch<any>(setStep(8));
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <div className="flex w-full justify-between items-center">
              <div className={styles.inputWrapper}>
                <Field
                  className="border-b border-black md:text-lg text-md font-extralight p-2.5 resize-none w-full focus:outline-none"
                  name="email"
                  validate={validateEmail}
                  placeholder="Ваша почта (email)"
                />
              </div>
              <div className={styles.error}></div>
            </div>
            <div className="text-regal-red font-extralight md:text-lg text-sm text-center">
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => {
                  dispatch<any>(setStep(6));
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

export default Bonus;
