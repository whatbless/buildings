import preloader from "./../../images/preloader.gif";

const Preloader = () => {
  return (
    <div className="flex justify-center items-center py-3">
      <img
        style={{
          width: 100,
          display: "block",
        }}
        src={preloader}
        alt="preloader gif"
      ></img>
    </div>
  );
};

export default Preloader;
