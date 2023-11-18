import React from "react";
import Carousel from "./components/carousel/Carousel";
import Feedback from "./components/feedback/Feedback";
import Hero from "./components/hero/Hero";
import Interlayer from "./components/interlayer/Interlayer";
import Question from "./components/question/Question";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Interlayer />
      <Carousel />
      <Feedback />
      <About />
      <Question />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
