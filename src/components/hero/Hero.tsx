//@ts-ignore
import video2 from "./../../images/hero2.mp4";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute top-0" id="hero"></div>

      <div className="relative">
        <video
          className="absolute left-0 top-0 w-screen h-screen object-cover -z-10"
          autoPlay={true}
          playsInline={true}
          muted={true}
          src={video2}
          loop
        ></video>
      </div>
      <div className="container mx-auto w-full min-h-screen text-white px-10"></div>
    </section>
  );
};

export default Hero;
