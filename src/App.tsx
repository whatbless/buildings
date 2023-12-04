import React from "react";
import Carousel from "./components/carousel/Carousel";
import Feedback from "./components/feedback/Feedback";
import Hero from "./components/hero/Hero";
import Interlayer from "./components/interlayer/Interlayer";
import Question from "./components/question/Question";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
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
  );
}

export default App;
