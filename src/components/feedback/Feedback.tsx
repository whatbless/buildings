import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./Feedback.module.css";
import sky from "./../../images/sky.png";
import like from "./../../images/like.gif";

function validateEmail(value: string) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

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
      <div className="container mx-auto w-full px-20">
        <h1 className="text-4xl font-extralight w-full text-center py-10">
          Какую недвижимость вы ищите?
        </h1>
        <p className="text-lg font-extralight text-center w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in
          dolore ab. Voluptates quidem quod, accusamus ullam, adipisci aut
          fugiat iusto magnam asperiores ipsam earum, sapiente consequuntur
          deserunt fugit dolores est architecto minima reiciendis. Inventore
          delectus iure earum quam eaque, sunt dicta quidem recusandae, qui, eum
          voluptas aut atque animi?
        </p>
        <div className="flex h-max">
          <div className="w-1/2 mt-32 mb-20 px-20">
            <img src={sky} alt="feedback-image" />
          </div>
          {isSended ? (
            <div className="flex flex-col justify-center items-center">
              <img src={like} alt="like-gif"></img>
              <p className="h-max w-max border-green-600 text-green-600 border px-10 py-5 text-3xl font-extralight">
                Данные отправленны!
              </p>
              <p className="text-black font-extralight text-xl mt-10 text-center">
                Спасибо! Наш представитель свяжется с вами в течении 24 часов
              </p>
            </div>
          ) : (
            <div className="w-1/2 flex flex-col mt-32 items-center">
              <p className="w-full font-extralight">
                Оставьте ваши контакты и наш специалист свяжется с вами в
                течении 24 часов!
              </p>
              <Formik
                initialValues={{
                  name: "",
                  number: "",
                  purpose: "",
                  addition: "",
                  email: "",
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
                          name="email"
                          validate={validateEmail}
                        />
                        <span className={styles.formTitle}>
                          Ваша почта {"( email )"}
                        </span>
                      </div>
                      <div className={styles.error}>
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
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
                      <h1 className="w-full text-2xl mb-4">
                        Дополнительная информация
                      </h1>
                      <p className="w-full mb-7 text-black font-extralight">
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
                      <div className="w-full">
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
