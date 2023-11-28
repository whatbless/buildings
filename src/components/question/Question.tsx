import React from "react";
import Quiz from "../quiz/Quiz";

const Question = () => {
  return (
    <section className="bg-pastel-grey relative flex flex-col items-center">
      <div id="question" className="absolute -top-28"></div>
      <div className="container mx-auto w-full h-full text-black">
        <h1 className="md:text-4xl text-3xl w-full text-center py-10 px-10 text-regal-blue">
          Пройдите опрос и получите бесплатную консультацию от наших экспертов!
        </h1>
        <div className="flex justify-center">
          <p className="text-center md:text-lg text-md px-10 md:w-2/3 w-full">
            Ответьте на вопросы и получите подборку объектов недвижимости,
            которая подойдёт именно вам! Получив ответы на эти вопросы, мы будем
            знать какие объекты вам подойдут лучше всего.
          </p>
        </div>
      </div>
      <div className="lg:container relative lg:mx-20 mx-5 flex justify-center py-24">
        <Quiz />
      </div>
    </section>
  );
};

export default Question;