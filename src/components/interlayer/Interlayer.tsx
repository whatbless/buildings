import React from "react";
import { setStep } from "../../redux/quizReducer";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Quiz from "../quiz/Quiz";

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

const Interlayer = () => {
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
    <section className="bg-pastel-grey">
      <div className="container mx-auto w-full py-7">
        <div className="w-full flex justify-center">
          <button
            onClick={openModal}
            className="text-white bg-regal-blue px-10 py-5  text-center"
          >
            Ответить на 5 вопросов и получить персональную подборку
            недвижимости!
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
          >
            <Quiz />
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Interlayer;
