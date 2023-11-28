//@ts-ignore
import video from "./../../images/video.mp4";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute top-0" id="hero"></div>
      <video
        className="absolute left-0 top-0 w-screen h-screen object-cover -z-10"
        autoPlay={true}
        playsInline={true}
        muted={true}
        src={video}
        loop
      ></video>
      <div className="container mx-auto w-full min-h-screen text-white px-10"></div>
    </section>
  );
};

export default Hero;
