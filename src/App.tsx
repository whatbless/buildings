import React from "react";
import Carousel from "./components/carousel/Carousel";
import Feedback from "./components/feedback/Feedback";
import Hero from "./components/hero/Hero";
import Interlayer from "./components/interlayer/Interlayer";
import Question from "./components/question/Question";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./anims.css";

function App() {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {scroll > 900 && (
        <a
          href="#hero"
          id="arrowUp"
          className="px-6 py-5 rounded-full fixed right-5 bottom-5 bg-regal-blue cursor-pointer z-50"
        >
          <FontAwesomeIcon className="text-white text-xl" icon={faAngleUp} />
        </a>
      )}
      <div>
        <Header />
        <Hero />
        <Interlayer />
        <Carousel />
        <Feedback />
        <About />
        <Question />
        <Footer />
      </div>
    </div>
  );
}

export default App;
