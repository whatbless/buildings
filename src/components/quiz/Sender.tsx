import React from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./Quiz.module.css";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/quizReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Sender = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.quiz);
  const message = `regions: ${data.regions}, propertyType: ${data.propertyType}, propertyFor: ${data.propertyFor}, price: ${data.price}, floor range: ${data.floorRange}, name: ${data.name}, email: ${data.email}, number: ${data.number}, validations: ${data.validations}, addition: ${data.addition}`;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_upsc13j",
      "template_k9nm0fc",
      e.target,
      "cLVGE7oDmk1YG9Cjm"
    );
    dispatch<any>(setStep(10));
  };

  return (
    <div className="relative h-full w-full">
      <h1>какая то надпись спасибо за то что прошел тест, отправить данные</h1>
      <form onSubmit={sendEmail}>
        <textarea className="hidden" name="message" value={message} />
        <div className={styles.buttonWrapper}>
          <button
            className={styles.backButton}
            onClick={() => {
              dispatch<any>(setStep(8));
            }}
          >
            <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
            חזור
          </button>
          <button className={styles.button} type="submit">
            להמשיך
            <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sender;
