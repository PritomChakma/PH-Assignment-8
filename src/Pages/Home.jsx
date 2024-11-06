import Banner from "./../components/Banner";
import BannerImg from "./../components/BannerImg";
import Products from "./../components/Products";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* image */}
      <BannerImg></BannerImg>
      {/* heading */}

      <div className="text-center mb-20">
        <h1 className="text-3xl font-bold">Explore Cutting-Edge Gadgets</h1>
      </div>
      <Products />
    </div>
  );
};

export default Home;
