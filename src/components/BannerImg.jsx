import vision from "../assets/banner.jpg";

const BannerImg = () => {
  return (
    <div className="p-10">
      <img
        className="w-[700px] md:h-[400px] mx-auto rounded-xl -translate-y-20 md:-translate-y-28 border-2 bg-[#9538E2] bg-opacity-5 p-5 "
        src={vision}
        alt=""
      />
    </div>
  );
};

export default BannerImg;
