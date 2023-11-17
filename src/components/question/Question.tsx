import React from "react";
import Quiz from "../quiz/Quiz";

const Question = () => {
  return (
    <section className="bg-pastel-grey relative">
      <div id="question" className="absolute -top-28"></div>
      <div className="container mx-auto w-full h-full text-black px-20">
        <h1 className="text-4xl font-extralight w-full text-center py-10 text-regal-blue">
          Пройдите опрос и получите бесплатную консультацию от наших экспертов!
        </h1>
        <div className="flex justify-center">
          <p className="text-center font-extralight text-lg w-2/3">
            Ответьте на вопросы и получите подборку объектов недвижимости,
            которая подойдёт именно вам! Получив ответы на эти вопросы, мы будем
            знать какие объекты вам подойдут лучше всего.
          </p>
        </div>
        <div className="flex justify-center h-max py-24">
          <Quiz />
        </div>
      </div>
    </section>
  );
};

export default Question;
