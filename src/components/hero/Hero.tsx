import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import cx from "classnames";
import Modal from "react-modal";
import Quiz from "../quiz/Quiz";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/quizReducer";

const images = [
  <img className={styles.image1} key="{slider1}"></img>,
  <img className={styles.image2} key="{slider2}"></img>,
  <img className={styles.image3} key="{slider3}"></img>,
];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    borderRadius: "35px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(255,255,255, 0.5)",
  },
};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current: number) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevImageIndex = activeIndex ? activeIndex - 1 : images.length - 1;
  const nextImageIndex =
    activeIndex === images.length - 1 ? 0 : activeIndex + 1;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
    dispatch<any>(setStep(0));
  }

  function closeModal() {
    setIsOpen(false);
    dispatch<any>(setStep(0));
  }

  return (
    <section>
      <div className="container mx-auto w-full min-h-screen text-white px-20">
        <div className={styles.wrapper}>
          <div className={styles.slider}>
            <div
              className={cx(styles.sliderImage, styles.sliderPrevImage)}
              key={prevImageIndex}
            >
              {images[prevImageIndex]}
            </div>
            <div className={styles.sliderImage} key={activeIndex}>
              {images[activeIndex]}
            </div>
            <div
              className={cx(styles.sliderImage, styles.sliderNextImage)}
              key={nextImageIndex}
            >
              {images[nextImageIndex]}
            </div>
          </div>
        </div>
        <div className="2xl:w-1/2 xl:w-2/3 md:w-5/6 xl:text-4xl md:text-left md:text-3xl text-2xl text-center w-full min-h-screen flex flex-col justify-center">
          <h1 className={styles.header}>
            Пройдите краткий опрос и получите персональную консультацию по
            выбору лучшей недвижимости в израиле!
          </h1>
          <div>
            <button
              className="text-white bg-regal-red text-xl rounded-md font-extralight w-max lg:px-12 lg:py-6 px-8 py-4 mt-10 duration-500 hover:-translate-y-1.5 hover:shadow-hero"
              onClick={openModal}
            >
              Пройти опрос!
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
          >
            <Quiz />
            <button
              className="absolute z-20 right-5 top-5"
              onClick={closeModal}
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-2xl hover:text-regal-red"
              />
            </button>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
