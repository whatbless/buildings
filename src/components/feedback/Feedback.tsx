import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./Feedback.module.css";
import sky from "./../../images/sky.jpg";

function requireValidate(value: string) {
  let error;
  if (!value) {
    error = "Required field";
  }
  return error;
}

const Feedback = () => {
  const [isSended, setIsSended] = useState(false);

  return (
    <section className={styles.wrapper}>
      <div className="container mx-auto w-full h-full text-white px-20">
        <h1 className="text-6xl font-extralight w-full text-center py-10 text-black ">
          Форма обратной связи
        </h1>
        <div className="flex h-full">
          <div className="w-2/3 my-40">
            <img src={sky} alt="feedback-image" />
          </div>
          {isSended ? (
            <div className="flex flex-col justify-center items-center">
              <p className="h-max w-max border-green-600 text-green-600 border px-10 py-5 text-3xl font-extralight">
                Данные отправленны!
              </p>
              <p className="text-black font-extralight text-xl mt-10 text-center">
                Спасибо! Наш представитель свяжется с вами в течении 24 часов
              </p>
            </div>
          ) : (
            <div className="w-full flex flex-col justify-center items-center pb-10">
              <p className="w-1/2 text-black text-lg font-extralight">
                Оставьте ваши контакты и наш специалист свяжется с вами в
                течении 24 часов!
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
                }}
              >
                {({ errors, touched, isValidating }) => (
                  <Form className="w-full">
                    <div className={styles.formBlock}>
                      <div className={styles.inputBlock}>
                        <Field
                          className={styles.formInput}
                          name="name"
                          validate={requireValidate}
                        />
                        <span className={styles.formTitle}>Ваше имя</span>
                      </div>
                      <div className={styles.error}>
                        {errors.name && touched.name && (
                          <div>{errors.name}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.formBlock}>
                      <div className={styles.inputBlock}>
                        <Field
                          className={styles.formInput}
                          name="number"
                          validate={requireValidate}
                        />
                        <span className={styles.formTitle}>
                          Ваш номер телефона {"( WhatsApp )"}
                        </span>
                      </div>
                      <div className={styles.error}>
                        {errors.number && touched.number && (
                          <div>{errors.number}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.formBlock}>
                      <div className={styles.inputBlock}>
                        <Field
                          className={styles.formInput}
                          name="purpose"
                          validate={requireValidate}
                        />
                        <span className={styles.formTitle}>
                          Для каких целей вы ищете недвижимость
                        </span>
                      </div>
                      <div className={styles.error}>
                        {errors.purpose && touched.purpose && (
                          <div>{errors.purpose}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.formBlock}>
                      <h1 className="w-1/2 text-3xl mb-4 text-black">
                        Дополнительная информация
                      </h1>
                      <p className="w-1/2 mb-7 text-black text-lg font-extralight">
                        Это поможет нам сделать максимально персонализированную
                        подборку для вас{" "}
                        {
                          "(площадь, цена, район, кол-во комнат, прочие предпочтения)"
                        }
                      </p>
                      <div className={styles.inputBlock}>
                        <Field
                          className={styles.formArea}
                          name="addition"
                          component="textarea"
                        />
                        <span className={styles.formTitle}>
                          Дополнительная информация
                        </span>
                      </div>
                      <div className={styles.error}>
                        {errors.addition && touched.addition && (
                          <div>{errors.addition}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.buttonWrapper}>
                      <div className="w-1/2">
                        <button className={styles.button} type="submit">
                          Отправить ответы!
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
