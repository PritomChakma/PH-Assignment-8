import { useEffect, useState } from "react";
import { addCart, getAllFavourite, removeFavourite } from "../Utility/indx";
const Wishlist = () => {
  const [favourite, setFavourite] = useState([]);
  useEffect(() => {
    const cart = getAllFavourite();
    setFavourite(cart);
  }, []);

  const handleRemove = (data) => {
    removeFavourite(data);
    const cart = getAllFavourite();
    setFavourite(cart);
  };
  //   add to cart
  const handleAddCart = (product) => {
    addCart(product);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold ml-16 mt-10">WishList</h1>
      {favourite.map((p, i) => (
        <div key={i} className="">
          <div className="flex justify-between items-center border-2 w-11/12 mx-auto my-5 shadow-xl rounded-xl">
            <div className="flex items-center  ">
              <div className="">
                <img
                  className="w-[180px] h-[150px]"
                  src={p.product_image}
                  alt=""
                  srcSet=""
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">{p.product_title}</h3>
                <p>{p.description}</p>
                <p>
                  <span className="font-bold mr-2">Price:</span>$ {p.price}
                </p>
                <butto className="btn text-white bg-[#9538E2] rounded-full px-5" onClick={()=> handleAddCart(p)}>Add to cart</butto>
              </div>
            </div>
            <div>
              <i
                onClick={() => handleRemove(p)}
                className="fa-solid fa-trash mr-5 text-xl text-gray"
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
