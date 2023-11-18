import React from "react";
import { Helmet } from "react-helmet";

const Contacts = () => {
  return (
    <section className="relative">
      <div className="absolute -top-28" id="contacts"></div>
      <div className="container mx-auto">
        <div className="relative">
          <div className="font-extralight sm:block hidden absolute bg-pastel-grey md:p-16 p-8 top-44 xl:left-56 lg:left-24 left-0 rounded-xl">
            <h1 className="md:text-2xl text-lg font-bold pb-3">
              Офис продаж REMAX
            </h1>
            <p className="py-3 md:text-base text-sm">
              Время работы: Пн-Пт, 10:00 - 19:00
            </p>
            <p className="pb-3 text-regal-blue md:text-base text-sm">
              +995 595 250 141
            </p>
            <p className="md:text-base text-sm">
              Точный адрес, Точный адрес, адрес, 85Б
            </p>
          </div>
          <Helmet>
            <script
              type="text/javascript"
              charSet="utf-8"
              async
              src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6060264a17cc79fa9c04669d121c6059f24fe2443abc49c545ce39dcf71c65f4&amp;width=100%25&amp;height=603&amp;lang=ru_RU&amp;scroll=false"
            ></script>
          </Helmet>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
