import React from "react";

const Contacts = () => {
  return (
    <section className="relative">
      <div className="absolute -top-28" id="contacts"></div>
      <div className="container mx-auto">
        <div className="relative">
          <div className=" sm:block hidden absolute bg-pastel-grey md:p-16 p-8 top-44 xl:left-56 lg:left-24 left-0 rounded-xl">
            <h1 className="md:text-2xl text-lg font-bold pb-3">
              Офис продаж REMAX
            </h1>
            <p className="py-3 md:text-base text-sm">
              Время работы: Пн-Пт, 10:00 - 19:00
            </p>
            <p className="pb-3 text-regal-blue font-extralight md:text-base text-sm">
              +995 595 250 141
            </p>
            <p className="md:text-base text-sm">
              Точный адрес, Точный адрес, адрес, 85Б
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <iframe
          className="w-full"
          style={{ pointerEvents: "none" }}
          src="https://www.google.com/maps/d/embed?mid=1gXqHnLAnzqJW6Ys0Xbjy97dg4kkX5V8&ehbc=2E312F&noprof=1"
          loading="lazy"
          height="650"
        ></iframe>
      </div>
    </section>
  );
};

export default Contacts;
