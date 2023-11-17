import React from "react";
import Carousel from "./components/carousel/Carousel";
import Feedback from "./components/feedback/Feedback";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Interlayer from "./components/interlayer/Interlayer";
import Question from "./components/question/Question";
import About from "./components/about/About";

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
    </div>
  );
}

export default App;
