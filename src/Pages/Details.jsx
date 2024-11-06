import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCart } from "../Utility/indx";
import { addFavourite } from "../Utility/indx";
import DetailBanner from "./../components/DetailBanner";
const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [i, setI] = useState(
    data.find((item) => item.product_id === parseInt(id)) || {}
  );

  //   add to cart
  const handleAddCart = (product) => {
    addCart(product);
  };

  // add to favourite
  const handleFavourite = (product) => {
    addFavourite(product);
  };

  return (
    <div>
      <DetailBanner></DetailBanner>


      <div className="hero  bg-base-200 w-3/4 mx-auto border-2 rounded-xl  -translate-y-28  ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={i.product_image} className=" rounded-lg shadow-2xl md:h-96 h-60" />
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{i.product_title}</h1>
            <p>
              <span className="font-bold">Price: </span>$ {i.price}
            </p>
            <p>{i.description}</p>

            <ul>{i.Specification}</ul>

            <h3 className="font-bold">Rating</h3>
            <div className="flex gap-20 items-center">
              <div>
                <i className="fa-solid fa-star text-orange-400"></i>
                <i className="fa-solid fa-star text-orange-400"></i>
                <i className="fa-solid fa-star text-orange-400"></i>
                <i className="fa-regular fa-star text-orange-400"></i>
                <i className="fa-regular fa-star text-orange-400"></i>
              </div>
              <div className="btn">{i.rating}</div>
            </div>
            <div className="flex gap-5 items-center">
              <button
                onClick={() =>{ handleAddCart(i); addToCart(i.price)}}
                className="px-8 btn rounded-full bg-[#9538E2] text-white flex"
              >
                <p>Add To Card</p>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              <button
                onClick={() => handleFavourite(i)}
                className="btn text-xl"
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
