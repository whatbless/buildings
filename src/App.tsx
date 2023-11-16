import React from "react";
import Feedback from "./components/feedback/Feedback";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Question from "./components/question/Question";
import Quiz from "./components/quiz/Quiz";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Feedback />
      <Question />
    </div>
  );
}

export default App;
