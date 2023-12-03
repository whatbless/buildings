import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./Feedback.module.css";
import image from "./../../images/properties.png";
import like from "./../../images/like.gif";

function requireValidate(value: string) {
  let error;
  if (!value) {
    error = "Required field";
  }
  return error;
}

const Feedback = () => {
  const [isSended, setIsSended] = useState(false);

  const [showElement, setShowElement] = React.useState(true);

  return (
    <section className={styles.wrapper}>
      <div className="container relative mx-auto w-full px-10">
        <div id="feedback" className="absolute top-36"></div>
        <h1 className="md:text-4xl text-3xl w-full text-center pt-10">
          ?איזה נדל"ן אתם מחפשים
        </h1>
        <div className="flex xl:flex-row flex-col h-max pt-20">
          <div className="2xl:w-2/5 xl:w-1/2 lg:w-2/3 mx-auto w-full sm:mb-10 mb-0 px-20">
            <img src={image} alt="feedback-image" />
          </div>
          {isSended ? (
            showElement ? (
              <div className="flex flex-col justify-center items-center">
                <img src={like} alt="like-gif"></img>
                <p className="h-max w-max border-green-600 text-green-600 md:border-2 border px-10 py-5 md:text-3xl text-xl">
                  !תודה
                </p>
                <p className="text-black md:text-xl text-md my-10 text-center">
                  בקשתך נקלטה
                </p>
                <p className="text-black md:text-xl text-md my-10 text-center">
                  !נציגנו יתקשר אליך תוך 24 שעות
                </p>
              </div>
            ) : (
              <div></div>
            )
          ) : (
            <div className="xl:w-1/2 w-full flex flex-col xl:text-left text-center items-center">
              <p className="w-full text-2xl">
                צור קשר! אנא השאר פרטים ונחזור אליך בקדם
              </p>
              <Formik
                initialValues={{
                  name: "",
                  number: "",
                  purpose: "",
                  addition: "",
                }}
                onSubmit={(values: any) => {
                  console.log(values);
                  setIsSended(true);
                  setTimeout(function () {
                    setShowElement(false);
                  }, 5000);
                }}
              >
                {({ errors, touched, isValidating }) => (
                  <Form className="w-full">
                    <div className={styles.formBlock}>
                      <div className={styles.inputWrapper}>
                        <Field
                          className={styles.input}
                          name="name"
                          validate={requireValidate}
                          placeholder="שם"
                        />
                      </div>
                      <div className={styles.error}>
                        {errors.name && touched.name && (
                          <div>{errors.name}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.formBlock}>
                      <div className={styles.inputWrapper}>
                        <Field
                          className={styles.input}
                          name="number"
                          validate={requireValidate}
                          placeholder="(מספר טלפון (וואטסאפ"
                        />
                      </div>
                      <div className={styles.error}>
                        {errors.number && touched.number && (
                          <div>{errors.number}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.formBlock}>
                      <div className={styles.inputWrapper}>
                        <Field
                          className={styles.input}
                          name="purpose"
                          validate={requireValidate}
                          placeholder="Для каких целей вы ищете недвижимость"
                        />
                      </div>
                      <div className={styles.error}>
                        {errors.purpose && touched.purpose && (
                          <div>{errors.purpose}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.formBlock}>
                      <h1 className="w-full text-2xl mb-4">מידע נוסף</h1>
                      <p className="w-full mb-7 text-black">
                        {
                          " זה יסייע לנו לבנות את תיק ההצעות האישי האופטימלי (שטח, מחיר, אזור, כמות חדרים, העדפות אחרות) "
                        }
                      </p>
                      <div className={styles.inputBlock}>
                        <Field
                          className={styles.formArea}
                          name="addition"
                          component="textarea"
                          placeholder="Дополнительная информация"
                        />
                      </div>
                      <div className={styles.error}>
                        {errors.addition && touched.addition && (
                          <div>{errors.addition}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.buttonWrapper}>
                      <div className="w-full">
                        <button
                          className="px-6 py-3 border border-regal-blue hover:px-12 duration-300 hover:bg-regal-blue hover:text-white text-regal-blue"
                          type="submit"
                        >
                          שלח
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
