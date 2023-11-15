import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import cx from "classnames";
import Modal from "react-modal";
import Quiz from "../quiz/Quiz";

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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section>
      <div className="container mx-auto w-full min-h-screen text-white">
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
        <div className="w-1/2 min-h-screen flex flex-col justify-center">
          <h1 className={styles.header}>
            Пройдите краткий опрос и получите персональную консультацию по
            выбору лучшей недвижимости в израиле!
          </h1>
          <div className={styles.button} onClick={openModal}>
            Пройти опрос!
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <Quiz />
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
