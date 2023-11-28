import { useState } from "react";
//@ts-ignore
import video1 from "./../../images/hero1.mp4";
//@ts-ignore
import video2 from "./../../images/hero2.mp4";

const Hero = () => {
  const [status, setStatus] = useState(true);

  return (
    <section className="relative">
      <div className="absolute top-0" id="hero"></div>
      {status ? (
        <div className="relative">
          <div
            className="absolute z-50 p-5 bg-white cursor-pointer"
            onClick={() => setStatus(false)}
          >
            {status ? "14clear" : "20ai"}
          </div>
          <video
            className="absolute left-0 top-0 w-screen h-screen object-cover -z-10"
            autoPlay={true}
            playsInline={true}
            muted={true}
            src={video1}
            loop
          ></video>
        </div>
      ) : (
        <div className="relative">
          <div
            className="absolute z-50 p-5 bg-white cursor-pointer"
            onClick={() => setStatus(true)}
          >
            {status ? "14clear" : "20ai"}
          </div>
          <video
            className="absolute left-0 top-0 w-screen h-screen object-cover -z-10"
            autoPlay={true}
            playsInline={true}
            muted={true}
            src={video2}
            loop
          ></video>
        </div>
      )}

      <div className="container mx-auto w-full min-h-screen text-white px-10"></div>
    </section>
  );
};

export default Hero;
