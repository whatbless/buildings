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
        <h1 className="md:text-4xl text-3xl w-full text-center py-10">
          Какую недвижимость вы ищите?
        </h1>
        <p className="md:text-lg texl-md text-center w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in
          dolore ab. Voluptates quidem quod, accusamus ullam, adipisci aut
          fugiat iusto magnam asperiores ipsam earum, sapiente consequuntur
          deserunt fugit dolores est architecto minima reiciendis. Inventore
          delectus iure earum quam eaque, sunt dicta quidem recusandae, qui, eum
          voluptas aut atque animi?
        </p>
        <div className="flex xl:flex-row flex-col h-max">
          <div className="2xl:w-2/5 xl:w-1/2 lg:w-2/3 mx-auto w-full xl:mt-32 mt-10 sm:mb-20 mb-0 px-20">
            <img src={image} alt="feedback-image" />
          </div>
          {isSended ? (
            showElement ? (
              <div className="flex flex-col justify-center items-center">
                <img src={like} alt="like-gif"></img>
                <p className="h-max w-max border-green-600 text-green-600 md:border-2 border px-10 py-5 md:text-3xl text-xl">
                  Данные отправленны!
                </p>
                <p className="text-black md:text-xl text-md my-10 text-center">
                  Спасибо! Наш представитель свяжется с вами в течении 24 часов
                </p>
              </div>
            ) : (
              <div></div>
            )
          ) : (
            <div className="xl:w-1/2 w-full flex flex-col xl:text-left text-center xl:mt-32 sm:mt-0 mt-20 xl:mb-0 mb-16 items-center">
              <p className="w-full text-2xl">
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
                          placeholder="Ваше имя"
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
                          placeholder="Ваш номер телефона (WhatsApp)"
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
                      <h1 className="w-full text-2xl mb-4">
                        Дополнительная информация
                      </h1>
                      <p className="w-full mb-7 text-black">
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
