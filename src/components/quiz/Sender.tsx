import React from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./Quiz.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import henryHeart from "./../../images/henry-heart.png";

const Sender = () => {
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
  };

  return (
    <div className="relative h-full w-full flex flex-col items-center">
      <img
        className="md:w-60 md:h-60 w-36 h-36"
        src={henryHeart}
        alt="henry-image8"
      />
      <h1 className="text-center md:text-lg sm:text-md text-sm">
        תודה! נהניתי מחברתך. אני סומך על חבריי לעבודה – הם מומחים בתחומם וימצאו
        את נכס חלומותיך בקלות! לחץ על הכפתור "שלח" והמומחה שלנו יצור איתך קשר
        בקרוב כדי להציג בפניך את האפשרויות הטובות דירות
      </h1>
      <form
        className="absolute bottom-0 flex w-full justify-center"
        onSubmit={sendEmail}
      >
        <textarea className="hidden" name="message" value={message} />
        <button className={styles.button} type="submit">
          שלח
          <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
        </button>
      </form>
    </div>
  );
};

export default Sender;
