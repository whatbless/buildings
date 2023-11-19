import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Modal from "react-modal";
import item from "./../../images/item1.jpeg";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firstImage1 from "./../../images/first-image1.png";
import secondImage1 from "./../../images/second-image1.png";
import thirdImage1 from "./../../images/third-image1.png";
import fourthImage1 from "./../../images/fourth-image1.png";

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

const handleDragStart = (e: any) => e.preventDefault();

const Carousel = () => {
  const [firstModalIsOpen, setIsOpenFirst] = React.useState(false);
  const [secondModalIsOpen, setIsOpenSecond] = React.useState(false);
  const [thirdModalIsOpen, setIsOpenThird] = React.useState(false);
  const [fourthModalIsOpen, setIsOpenFourth] = React.useState(false);

  const modals = {
    0: firstModalIsOpen,
    1: secondModalIsOpen,
    2: thirdModalIsOpen,
    3: fourthModalIsOpen,
  };

  function openModal(index: number) {
    switch (index) {
      case 0:
        setIsOpenFirst(true);
        break;
      case 1:
        setIsOpenSecond(true);
        break;
      case 2:
        setIsOpenThird(true);
        break;
      case 3:
        setIsOpenFourth(true);
        break;
    }
  }

  function closeModal() {
    setIsOpenFirst(false);
    setIsOpenSecond(false);
    setIsOpenThird(false);
    setIsOpenFourth(false);
  }

  const objects = [
    {
      src: item,
      title: "Батуми Вью",
      desc: "Идеально для инвестиций. Уникальный комплекс на нулевой линии!",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et architecto cupiditate explicabo deserunt non quo magni fuga reprehenderit alias nemo adipisci nihil veniam dignissimos aut officiis dolor porro minus est, eveniet dolore. Quisquam, odio et. Quod, qui quasi. Soluta magnam sunt doloremque eos aliquid maxime quis dignissimos rerum aperiam. Ducimus voluptas magnam quidem ex perferendis iste, facere numquam dignissimos qui placeat dolor sint, et eos, vel vero! Pariatur labore fuga repudiandae quo veniam quis vero. Suscipit, distinctio, vero incidunt nostrum quia sapiente atque modi libero ratione at dolore delectus eius esse commodi? Magnam dolor incidunt, deserunt tempora illo rerum quaerat!",
    },
    {
      src: item,
      title: "Текто Франко",
      desc: "Идеально для инвестиций. Привлекательный ЖК в тихом районе",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et architecto cupiditate explicabo deserunt non quo magni fuga reprehenderit alias nemo adipisci nihil veniam dignissimos aut officiis dolor porro minus est, eveniet dolore. Quisquam, odio et. Quod, qui quasi. Soluta magnam sunt doloremque eos aliquid maxime quis dignissimos rerum aperiam. Ducimus voluptas magnam quidem ex perferendis iste, facere numquam dignissimos qui placeat dolor sint, et eos, vel vero! Pariatur labore fuga repudiandae quo veniam quis vero. Suscipit, distinctio, vero incidunt nostrum quia sapiente atque modi libero ratione at dolore delectus eius esse commodi? Magnam dolor incidunt, deserunt tempora illo rerum quaerat!",
    },
    {
      src: item,
      title: "Куб Батуми",
      desc: "Идеально для инвестиций. Новый ЖК в шикарном месте на аллее героев",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et architecto cupiditate explicabo deserunt non quo magni fuga reprehenderit alias nemo adipisci nihil veniam dignissimos aut officiis dolor porro minus est, eveniet dolore. Quisquam, odio et. Quod, qui quasi. Soluta magnam sunt doloremque eos aliquid maxime quis dignissimos rerum aperiam. Ducimus voluptas magnam quidem ex perferendis iste, facere numquam dignissimos qui placeat dolor sint, et eos, vel vero! Pariatur labore fuga repudiandae quo veniam quis vero. Suscipit, distinctio, vero incidunt nostrum quia sapiente atque modi libero ratione at dolore delectus eius esse commodi? Magnam dolor incidunt, deserunt tempora illo rerum quaerat!",
    },
    {
      src: item,
      title: "Гранд Аква",
      desc: "Премиальный комплекс в элитном районе. Идеальный для инвестиций",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et architecto cupiditate explicabo deserunt non quo magni fuga reprehenderit alias nemo adipisci nihil veniam dignissimos aut officiis dolor porro minus est, eveniet dolore. Quisquam, odio et. Quod, qui quasi. Soluta magnam sunt doloremque eos aliquid maxime quis dignissimos rerum aperiam. Ducimus voluptas magnam quidem ex perferendis iste, facere numquam dignissimos qui placeat dolor sint, et eos, vel vero! Pariatur labore fuga repudiandae quo veniam quis vero. Suscipit, distinctio, vero incidunt nostrum quia sapiente atque modi libero ratione at dolore delectus eius esse commodi? Magnam dolor incidunt, deserunt tempora illo rerum quaerat!",
    },
  ];

  const firstItems = [
    <img
      className="px-2.5"
      src={firstImage1}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="px-2.5"
      src={firstImage1}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="px-2.5"
      src={firstImage1}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  const secondItems = [
    <img
      className="px-2.5"
      src={secondImage1}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="px-2.5"
      src={secondImage1}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="px-2.5"
      src={secondImage1}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  const thirdItems = [
    <img
      className="px-2.5"
      src={thirdImage1}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="px-2.5"
      src={thirdImage1}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="px-2.5"
      src={thirdImage1}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  const fourthItems = [
    <img
      className="px-2.5"
      src={fourthImage1}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="px-2.5"
      src={fourthImage1}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="px-2.5"
      src={fourthImage1}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  const items = {
    0: firstItems,
    1: secondItems,
    2: thirdItems,
    3: fourthItems,
  };

  const placesItems = objects.map((block, index: number) => (
    <div
      className="mx-5 text-center duration-300 hover:translate-y-1.5 cursor-pointer hover:text-regal-blue"
      onClick={() => openModal(index)}
    >
      <img src={block.src} onDragStart={handleDragStart} role="presentation" />
      <h1 className="px-2 pt-7 text-xl font-bold">{block.title}</h1>
      <p className="px-2 py-5 font-extralight">{block.desc}</p>
      <button className="mb-5 hover:bg-regal-blue hover:text-white hover:duration-300 rounded-md p-3">
        Узнать подробности
      </button>
    </div>
  ));

  return (
    <section className="px-10 pt-5 pb-20">
      <div className="container mx-auto w-full">
        <div className="flex flex-col items-center py-8">
          <h1 className="text-center w-full md:text-4xl text-3xl font-extralight text-regal-blue pb-4">
            Remax - Lorem ipsum dolor sit amet.
          </h1>
          <p className="md:w-2/3 w-full text-center font-extralight ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa magni
            iste dolorem nisi itaque excepturi dolore culpa mollitia vero?
            Accusamus cupiditate recusandae aliquid. Praesentium eos totam
            pariatur, reprehenderit quam laborum fuga corrupti natus illo
            debitis libero molestiae, temporibus fugit dicta dolores neque,
            delectus facere accusamus culpa blanditiis ducimus sunt iure.
          </p>
        </div>
        <AliceCarousel
          mouseTracking
          items={placesItems}
          autoPlay={true}
          responsive={{
            640: { items: 1 },
            1024: { items: 2 },
            1280: { items: 4 },
          }}
          infinite={true}
          disableDotsControls={true}
          autoPlayInterval={5000}
        />
        {objects.map((block, index: number) => (
          <Modal
            //@ts-ignore
            isOpen={modals[index]}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
          >
            <section className="flex flex-col 2xl:w-[1036px] lg:w-[780px] w-screen items-center md:p-20 p-10">
              <h1 className="text-center text-regal-red font-extralight text-3xl pb-5">
                {block.title}
              </h1>
              <AliceCarousel
                mouseTracking
                //@ts-ignore
                items={items[index]}
                autoPlay={true}
                responsive={{
                  0: { items: 1 },
                  1530: { items: 3 },
                }}
                infinite={true}
                disableDotsControls={true}
                autoPlayInterval={5000}
              />
              <p className="text-center font-extralight md:text-base text-sm">
                {block.text}
              </p>
              <a
                href="#feedback"
                onClick={() => closeModal()}
                className="mt-7 px-5 py-2.5 border border-regal-blue hover:px-12 duration-300 hover:bg-regal-blue hover:text-white text-regal-blue font-extralight"
              >
                Связаться с нами!
              </a>
            </section>
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
        ))}
      </div>
    </section>
  );
};

export default Carousel;
