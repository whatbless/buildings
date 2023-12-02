//@ts-ignore
import video2 from "./../../images/hero2.mp4";
import { useEffect, useState } from "react";
import image from "./../../images/hero-image.jpeg";

const Hero = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width / height < 1.45;

  return (
    <section className="relative">
      <div className="absolute top-0" id="hero"></div>

      <div className="relative">
        {isMobile ? (
          <div
            style={{
              backgroundImage: "url(./../../images/hero-image.jpeg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              position: "absolute",
              left: 0,
              top: 0,
              width: "100vw",
              height: "100vh",
            }}
          >
            //
            <img
              className="absolute left-0 top-0 w-screen h-screen object-cover -z-10"
              src={image}
              alt="hero-image"
            />
          </div>
        ) : (
          <video
            className="absolute left-0 top-0 w-screen h-screen object-cover -z-10"
            autoPlay={true}
            playsInline={true}
            muted={true}
            src={video2}
            loop
          ></video>
        )}
      </div>
      <div className="container mx-auto w-full min-h-screen text-white px-10"></div>
    </section>
  );
};

export default Hero;
