import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./Carousel.module.css";
import Modal from "react-modal";
import lissabon from "./../../images/lissabon.jpeg";
import braga from "./../../images/braga.jpeg";
import portu from "./../../images/portu.jpeg";
import buenos from "./../../images/buenos.jpeg";
import loresh from "./../../images/loresh.jpeg";
import kordova from "./../../images/kordova.jpeg";
import mendosa from "./../../images/mendosa.jpeg";
import rosario from "./../../images/rosario.jpeg";

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
    width: "80%",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(255,255,255, 0.5)",
  },
};

const handleDragStart = (e: any) => e.preventDefault();

const Carousel = () => {
  const [lissabonModalIsOpen, setIsOpenLissabon] = React.useState(false);
  const [bragaModalIsOpen, setIsOpenBraga] = React.useState(false);
  const [loreshModalIsOpen, setIsOpenLoresh] = React.useState(false);
  const [portuModalIsOpen, setIsOpenPortu] = React.useState(false);
  const [buenosModalIsOpen, setIsOpenBuenos] = React.useState(false);
  const [kordovaModalIsOpen, setIsOpenKordova] = React.useState(false);
  const [rosarioModalIsOpen, setIsOpenRosario] = React.useState(false);
  const [mendosaModalIsOpen, setIsOpenMendosa] = React.useState(false);

  function openLissabonModal() {
    setIsOpenLissabon(true);
  }
  function openLoreshModal() {
    setIsOpenLoresh(true);
  }
  function openBragaModal() {
    setIsOpenBraga(true);
  }
  function openPortuModal() {
    setIsOpenPortu(true);
  }
  function openBuenosModal() {
    setIsOpenBuenos(true);
  }
  function openKordovaModal() {
    setIsOpenKordova(true);
  }
  function openRosarioModal() {
    setIsOpenRosario(true);
  }
  function openMendosaModal() {
    setIsOpenMendosa(true);
  }

  function closeModal() {
    setIsOpenLissabon(false);
    setIsOpenLoresh(false);
    setIsOpenBraga(false);
    setIsOpenPortu(false);
    setIsOpenBuenos(false);
    setIsOpenKordova(false);
    setIsOpenRosario(false);
    setIsOpenMendosa(false);
  }

  const portugalBlocks = [
    {
      src: lissabon,
      text: "Лиссабон",
      modal: openLissabonModal,
    },
    {
      src: portu,
      text: "Порту",
      modal: openPortuModal,
    },
    {
      src: braga,
      text: "Брага",
      modal: openBragaModal,
    },
    {
      src: loresh,
      text: "Лореш",
      modal: openLoreshModal,
    },
  ];

  const argentinaBlocks = [
    {
      src: buenos,
      text: "Буэнос-Айрес",
      modal: openBuenosModal,
    },
    {
      src: kordova,
      text: "Кордова",
      modal: openKordovaModal,
    },
    {
      src: rosario,
      text: "Росарио",
      modal: openRosarioModal,
    },
    {
      src: mendosa,
      text: "Мендоса",
      modal: openMendosaModal,
    },
  ];

  const portugalItems = portugalBlocks.map((block) => (
    <div className={styles.object} onClick={block.modal}>
      <img src={block.src} onDragStart={handleDragStart} role="presentation" />
      <p className="absolute bottom-4 text-center w-5/6 text-white font-extralight rounded-md p-2 text-lg bg-regal-blue">
        {block.text}
      </p>
    </div>
  ));

  const argentinaItems = argentinaBlocks.map((block) => (
    <div className={styles.object} onClick={block.modal}>
      <img src={block.src} onDragStart={handleDragStart} role="presentation" />
      <p className="absolute bottom-4 text-center w-5/6 text-white font-extralight rounded-md p-2 text-lg bg-regal-red">
        {block.text}
      </p>
    </div>
  ));

  return (
    <section className="px-10 pt-5 pb-20">
      <div className="container mx-auto w-full">
        <div className="flex flex-col items-center py-8">
          <h1 className="text-center w-full md:text-4xl text-3xl font-extralight text-regal-blue pb-4">
            Португалия
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
          items={portugalItems}
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
        <div className="flex flex-col items-center py-8">
          <h1 className="text-center w-full md:text-4xl text-3xl font-extralight text-regal-red pb-4">
            Аргентина
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
          items={argentinaItems}
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
        <Modal
          isOpen={lissabonModalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <section className="flex flex-col items-center p-20">
            <h1 className="text-center font-extralight text-3xl pb-5">
              Лиссабон
            </h1>
            <p className="text-center font-extralight lg:text-md md:text-md sm:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              esse dignissimos doloribus maiores excepturi, ab est quos alias,
              nulla similique incidunt sapiente consectetur dolorem tempora
              minus. Officia vel dolore eveniet. Expedita officiis vitae
              quibusdam tempora ratione harum cum blanditiis sed reprehenderit
              corporis, illum exercitationem ex dolorem. Recusandae impedit
              ullam necessitatibus. Expedita quaerat dolor adipisci, voluptatem
              excepturi praesentium quia dolores incidunt nisi corrupti facere
              porro iste atque consequatur quam perferendis? Vel, illum fugit!
              Aspernatur, minima architecto impedit eum nisi quasi? Delectus
              doloremque corrupti nulla ea. Consequatur at maiores quibusdam
              dicta voluptates itaque ex, deleniti culpa dolorem non alias quos,
              unde sed dolor beatae pariatur asperiores molestiae explicabo
              aspernatur numquam porro harum minus sint. Culpa non maiores
              adipisci illo, amet ea! Nisi velit unde architecto, quisquam
              adipisci ut incidunt cum dolorem itaque possimus vel alias, sit
              debitis quaerat accusamus odio maiores vero dignissimos quos nemo
              rerum. Sint quibusdam sapiente dolores beatae ipsam tempora
              voluptas voluptate obcaecati numquam dolore. Ipsa, fuga debitis
              beatae quisquam, est, at asperiores quibusdam repellat vitae sint
              ratione eius! Iusto dolorum fugiat assumenda voluptates ducimus
              obcaecati expedita laudantium. Ipsam, distinctio excepturi vel
              rem, incidunt ea beatae dolorem culpa facere dolores quam
              repudiandae ut nisi quas repellendus temporibus neque. Voluptates!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              eaque autem aspernatur debitis ab placeat, facilis ex rem cum
              mollitia dolorum nesciunt architecto numquam velit soluta quasi
              laudantium qui quia cupiditate, iure corporis facere sit itaque
              aliquid! Iure autem tenetur exercitationem placeat nesciunt! Non,
              perferendis repellendus?
            </p>
          </section>
        </Modal>
        <Modal
          isOpen={loreshModalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <section className="flex flex-col items-center p-20">
            <h1 className="text-center font-extralight text-3xl pb-5">Лореш</h1>
            <p className="text-center font-extralight lg:text-md md:text-md sm:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              esse dignissimos doloribus maiores excepturi, ab est quos alias,
              nulla similique incidunt sapiente consectetur dolorem tempora
              minus. Officia vel dolore eveniet. Expedita officiis vitae
              quibusdam tempora ratione harum cum blanditiis sed reprehenderit
              corporis, illum exercitationem ex dolorem. Recusandae impedit
              ullam necessitatibus. Expedita quaerat dolor adipisci, voluptatem
              excepturi praesentium quia dolores incidunt nisi corrupti facere
              porro iste atque consequatur quam perferendis? Vel, illum fugit!
              Aspernatur, minima architecto impedit eum nisi quasi? Delectus
              doloremque corrupti nulla ea. Consequatur at maiores quibusdam
              dicta voluptates itaque ex, deleniti culpa dolorem non alias quos,
              unde sed dolor beatae pariatur asperiores molestiae explicabo
              aspernatur numquam porro harum minus sint. Culpa non maiores
              adipisci illo, amet ea! Nisi velit unde architecto, quisquam
              adipisci ut incidunt cum dolorem itaque possimus vel alias, sit
              debitis quaerat accusamus odio maiores vero dignissimos quos nemo
              rerum. Sint quibusdam sapiente dolores beatae ipsam tempora
              voluptas voluptate obcaecati numquam dolore. Ipsa, fuga debitis
              beatae quisquam, est, at asperiores quibusdam repellat vitae sint
              ratione eius! Iusto dolorum fugiat assumenda voluptates ducimus
              obcaecati expedita laudantium. Ipsam, distinctio excepturi vel
              rem, incidunt ea beatae dolorem culpa facere dolores quam
              repudiandae ut nisi quas repellendus temporibus neque. Voluptates!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              eaque autem aspernatur debitis ab placeat, facilis ex rem cum
              mollitia dolorum nesciunt architecto numquam velit soluta quasi
              laudantium qui quia cupiditate, iure corporis facere sit itaque
              aliquid! Iure autem tenetur exercitationem placeat nesciunt! Non,
              perferendis repellendus?
            </p>
          </section>
        </Modal>
        <Modal
          isOpen={portuModalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <section className="flex flex-col items-center p-20">
            <h1 className="text-center font-extralight text-3xl pb-5">Порту</h1>
            <p className="text-center font-extralight lg:text-md md:text-md sm:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              esse dignissimos doloribus maiores excepturi, ab est quos alias,
              nulla similique incidunt sapiente consectetur dolorem tempora
              minus. Officia vel dolore eveniet. Expedita officiis vitae
              quibusdam tempora ratione harum cum blanditiis sed reprehenderit
              corporis, illum exercitationem ex dolorem. Recusandae impedit
              ullam necessitatibus. Expedita quaerat dolor adipisci, voluptatem
              excepturi praesentium quia dolores incidunt nisi corrupti facere
              porro iste atque consequatur quam perferendis? Vel, illum fugit!
              Aspernatur, minima architecto impedit eum nisi quasi? Delectus
              doloremque corrupti nulla ea. Consequatur at maiores quibusdam
              dicta voluptates itaque ex, deleniti culpa dolorem non alias quos,
              unde sed dolor beatae pariatur asperiores molestiae explicabo
              aspernatur numquam porro harum minus sint. Culpa non maiores
              adipisci illo, amet ea! Nisi velit unde architecto, quisquam
              adipisci ut incidunt cum dolorem itaque possimus vel alias, sit
              debitis quaerat accusamus odio maiores vero dignissimos quos nemo
              rerum. Sint quibusdam sapiente dolores beatae ipsam tempora
              voluptas voluptate obcaecati numquam dolore. Ipsa, fuga debitis
              beatae quisquam, est, at asperiores quibusdam repellat vitae sint
              ratione eius! Iusto dolorum fugiat assumenda voluptates ducimus
              obcaecati expedita laudantium. Ipsam, distinctio excepturi vel
              rem, incidunt ea beatae dolorem culpa facere dolores quam
              repudiandae ut nisi quas repellendus temporibus neque. Voluptates!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              eaque autem aspernatur debitis ab placeat, facilis ex rem cum
              mollitia dolorum nesciunt architecto numquam velit soluta quasi
              laudantium qui quia cupiditate, iure corporis facere sit itaque
              aliquid! Iure autem tenetur exercitationem placeat nesciunt! Non,
              perferendis repellendus?
            </p>
          </section>
        </Modal>
        <Modal
          isOpen={buenosModalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <section className="flex flex-col items-center p-20">
            <h1 className="text-center font-extralight text-3xl pb-5">
              Буэнос-Айрес
            </h1>
            <p className="text-center font-extralight lg:text-md md:text-md sm:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              esse dignissimos doloribus maiores excepturi, ab est quos alias,
              nulla similique incidunt sapiente consectetur dolorem tempora
              minus. Officia vel dolore eveniet. Expedita officiis vitae
              quibusdam tempora ratione harum cum blanditiis sed reprehenderit
              corporis, illum exercitationem ex dolorem. Recusandae impedit
              ullam necessitatibus. Expedita quaerat dolor adipisci, voluptatem
              excepturi praesentium quia dolores incidunt nisi corrupti facere
              porro iste atque consequatur quam perferendis? Vel, illum fugit!
              Aspernatur, minima architecto impedit eum nisi quasi? Delectus
              doloremque corrupti nulla ea. Consequatur at maiores quibusdam
              dicta voluptates itaque ex, deleniti culpa dolorem non alias quos,
              unde sed dolor beatae pariatur asperiores molestiae explicabo
              aspernatur numquam porro harum minus sint. Culpa non maiores
              adipisci illo, amet ea! Nisi velit unde architecto, quisquam
              adipisci ut incidunt cum dolorem itaque possimus vel alias, sit
              debitis quaerat accusamus odio maiores vero dignissimos quos nemo
              rerum. Sint quibusdam sapiente dolores beatae ipsam tempora
              voluptas voluptate obcaecati numquam dolore. Ipsa, fuga debitis
              beatae quisquam, est, at asperiores quibusdam repellat vitae sint
              ratione eius! Iusto dolorum fugiat assumenda voluptates ducimus
              obcaecati expedita laudantium. Ipsam, distinctio excepturi vel
              rem, incidunt ea beatae dolorem culpa facere dolores quam
              repudiandae ut nisi quas repellendus temporibus neque. Voluptates!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              eaque autem aspernatur debitis ab placeat, facilis ex rem cum
              mollitia dolorum nesciunt architecto numquam velit soluta quasi
              laudantium qui quia cupiditate, iure corporis facere sit itaque
              aliquid! Iure autem tenetur exercitationem placeat nesciunt! Non,
              perferendis repellendus?
            </p>
          </section>
        </Modal>
        <Modal
          isOpen={rosarioModalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <section className="flex flex-col items-center p-20">
            <h1 className="text-center font-extralight text-3xl pb-5">
              Росарио
            </h1>
            <p className="text-center font-extralight lg:text-md md:text-md sm:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              esse dignissimos doloribus maiores excepturi, ab est quos alias,
              nulla similique incidunt sapiente consectetur dolorem tempora
              minus. Officia vel dolore eveniet. Expedita officiis vitae
              quibusdam tempora ratione harum cum blanditiis sed reprehenderit
              corporis, illum exercitationem ex dolorem. Recusandae impedit
              ullam necessitatibus. Expedita quaerat dolor adipisci, voluptatem
              excepturi praesentium quia dolores incidunt nisi corrupti facere
              porro iste atque consequatur quam perferendis? Vel, illum fugit!
              Aspernatur, minima architecto impedit eum nisi quasi? Delectus
              doloremque corrupti nulla ea. Consequatur at maiores quibusdam
              dicta voluptates itaque ex, deleniti culpa dolorem non alias quos,
              unde sed dolor beatae pariatur asperiores molestiae explicabo
              aspernatur numquam porro harum minus sint. Culpa non maiores
              adipisci illo, amet ea! Nisi velit unde architecto, quisquam
              adipisci ut incidunt cum dolorem itaque possimus vel alias, sit
              debitis quaerat accusamus odio maiores vero dignissimos quos nemo
              rerum. Sint quibusdam sapiente dolores beatae ipsam tempora
              voluptas voluptate obcaecati numquam dolore. Ipsa, fuga debitis
              beatae quisquam, est, at asperiores quibusdam repellat vitae sint
              ratione eius! Iusto dolorum fugiat assumenda voluptates ducimus
              obcaecati expedita laudantium. Ipsam, distinctio excepturi vel
              rem, incidunt ea beatae dolorem culpa facere dolores quam
              repudiandae ut nisi quas repellendus temporibus neque. Voluptates!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              eaque autem aspernatur debitis ab placeat, facilis ex rem cum
              mollitia dolorum nesciunt architecto numquam velit soluta quasi
              laudantium qui quia cupiditate, iure corporis facere sit itaque
              aliquid! Iure autem tenetur exercitationem placeat nesciunt! Non,
              perferendis repellendus?
            </p>
          </section>
        </Modal>
        <Modal
          isOpen={kordovaModalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <section className="flex flex-col items-center p-20">
            <h1 className="text-center font-extralight text-3xl pb-5">
              Кордова
            </h1>
            <p className="text-center font-extralight lg:text-md md:text-md sm:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              esse dignissimos doloribus maiores excepturi, ab est quos alias,
              nulla similique incidunt sapiente consectetur dolorem tempora
              minus. Officia vel dolore eveniet. Expedita officiis vitae
              quibusdam tempora ratione harum cum blanditiis sed reprehenderit
              corporis, illum exercitationem ex dolorem. Recusandae impedit
              ullam necessitatibus. Expedita quaerat dolor adipisci, voluptatem
              excepturi praesentium quia dolores incidunt nisi corrupti facere
              porro iste atque consequatur quam perferendis? Vel, illum fugit!
              Aspernatur, minima architecto impedit eum nisi quasi? Delectus
              doloremque corrupti nulla ea. Consequatur at maiores quibusdam
              dicta voluptates itaque ex, deleniti culpa dolorem non alias quos,
              unde sed dolor beatae pariatur asperiores molestiae explicabo
              aspernatur numquam porro harum minus sint. Culpa non maiores
              adipisci illo, amet ea! Nisi velit unde architecto, quisquam
              adipisci ut incidunt cum dolorem itaque possimus vel alias, sit
              debitis quaerat accusamus odio maiores vero dignissimos quos nemo
              rerum. Sint quibusdam sapiente dolores beatae ipsam tempora
              voluptas voluptate obcaecati numquam dolore. Ipsa, fuga debitis
              beatae quisquam, est, at asperiores quibusdam repellat vitae sint
              ratione eius! Iusto dolorum fugiat assumenda voluptates ducimus
              obcaecati expedita laudantium. Ipsam, distinctio excepturi vel
              rem, incidunt ea beatae dolorem culpa facere dolores quam
              repudiandae ut nisi quas repellendus temporibus neque. Voluptates!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              eaque autem aspernatur debitis ab placeat, facilis ex rem cum
              mollitia dolorum nesciunt architecto numquam velit soluta quasi
              laudantium qui quia cupiditate, iure corporis facere sit itaque
              aliquid! Iure autem tenetur exercitationem placeat nesciunt! Non,
              perferendis repellendus?
            </p>
          </section>
        </Modal>
        <Modal
          isOpen={mendosaModalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <section className="flex flex-col items-center p-20">
            <h1 className="text-center font-extralight text-3xl pb-5">
              Мендоса
            </h1>
            <p className="text-center font-extralight lg:text-md md:text-md sm:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              esse dignissimos doloribus maiores excepturi, ab est quos alias,
              nulla similique incidunt sapiente consectetur dolorem tempora
              minus. Officia vel dolore eveniet. Expedita officiis vitae
              quibusdam tempora ratione harum cum blanditiis sed reprehenderit
              corporis, illum exercitationem ex dolorem. Recusandae impedit
              ullam necessitatibus. Expedita quaerat dolor adipisci, voluptatem
              excepturi praesentium quia dolores incidunt nisi corrupti facere
              porro iste atque consequatur quam perferendis? Vel, illum fugit!
              Aspernatur, minima architecto impedit eum nisi quasi? Delectus
              doloremque corrupti nulla ea. Consequatur at maiores quibusdam
              dicta voluptates itaque ex, deleniti culpa dolorem non alias quos,
              unde sed dolor beatae pariatur asperiores molestiae explicabo
              aspernatur numquam porro harum minus sint. Culpa non maiores
              adipisci illo, amet ea! Nisi velit unde architecto, quisquam
              adipisci ut incidunt cum dolorem itaque possimus vel alias, sit
              debitis quaerat accusamus odio maiores vero dignissimos quos nemo
              rerum. Sint quibusdam sapiente dolores beatae ipsam tempora
              voluptas voluptate obcaecati numquam dolore. Ipsa, fuga debitis
              beatae quisquam, est, at asperiores quibusdam repellat vitae sint
              ratione eius! Iusto dolorum fugiat assumenda voluptates ducimus
              obcaecati expedita laudantium. Ipsam, distinctio excepturi vel
              rem, incidunt ea beatae dolorem culpa facere dolores quam
              repudiandae ut nisi quas repellendus temporibus neque. Voluptates!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              eaque autem aspernatur debitis ab placeat, facilis ex rem cum
              mollitia dolorum nesciunt architecto numquam velit soluta quasi
              laudantium qui quia cupiditate, iure corporis facere sit itaque
              aliquid! Iure autem tenetur exercitationem placeat nesciunt! Non,
              perferendis repellendus?
            </p>
          </section>
        </Modal>
        <Modal
          isOpen={bragaModalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <section className="flex flex-col items-center p-20">
            <h1 className="text-center font-extralight text-3xl pb-5">Брага</h1>
            <p className="text-center font-extralight lg:text-md md:text-md sm:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              esse dignissimos doloribus maiores excepturi, ab est quos alias,
              nulla similique incidunt sapiente consectetur dolorem tempora
              minus. Officia vel dolore eveniet. Expedita officiis vitae
              quibusdam tempora ratione harum cum blanditiis sed reprehenderit
              corporis, illum exercitationem ex dolorem. Recusandae impedit
              ullam necessitatibus. Expedita quaerat dolor adipisci, voluptatem
              excepturi praesentium quia dolores incidunt nisi corrupti facere
              porro iste atque consequatur quam perferendis? Vel, illum fugit!
              Aspernatur, minima architecto impedit eum nisi quasi? Delectus
              doloremque corrupti nulla ea. Consequatur at maiores quibusdam
              dicta voluptates itaque ex, deleniti culpa dolorem non alias quos,
              unde sed dolor beatae pariatur asperiores molestiae explicabo
              aspernatur numquam porro harum minus sint. Culpa non maiores
              adipisci illo, amet ea! Nisi velit unde architecto, quisquam
              adipisci ut incidunt cum dolorem itaque possimus vel alias, sit
              debitis quaerat accusamus odio maiores vero dignissimos quos nemo
              rerum. Sint quibusdam sapiente dolores beatae ipsam tempora
              voluptas voluptate obcaecati numquam dolore. Ipsa, fuga debitis
              beatae quisquam, est, at asperiores quibusdam repellat vitae sint
              ratione eius! Iusto dolorum fugiat assumenda voluptates ducimus
              obcaecati expedita laudantium. Ipsam, distinctio excepturi vel
              rem, incidunt ea beatae dolorem culpa facere dolores quam
              repudiandae ut nisi quas repellendus temporibus neque. Voluptates!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              eaque autem aspernatur debitis ab placeat, facilis ex rem cum
              mollitia dolorum nesciunt architecto numquam velit soluta quasi
              laudantium qui quia cupiditate, iure corporis facere sit itaque
              aliquid! Iure autem tenetur exercitationem placeat nesciunt! Non,
              perferendis repellendus?
            </p>
          </section>
        </Modal>
      </div>
    </section>
  );
};

export default Carousel;
