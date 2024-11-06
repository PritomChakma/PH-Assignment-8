import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
const DashBoardHeader = () => {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const handleIsActive = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "WishList",
      });
    }
  };

  return (
    <div>
      <div className="hero bg-[#9538E2]  md:w-11/12 mx-auto rounded-b-xl ">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold  text-white">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6  text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex gap-5 items-center justify-center  text-white">
              <Link
                // to="/dashboard"
                onClick={() => handleIsActive("cart")}
                className={`${
                  isActive.cart
                    ? "bg-white btn text-[#9538E2] px-12 rounded-full"
                    : "btn bg-[#9538E2] text-white px-12 rounded-full"
                }`}
              >
                Cart
              </Link>

              <Link
                // to="/dashboard"
                onClick={() => handleIsActive("WishList")}
                className={`${
                  isActive.cart
                    ? "btn bg-[#9538E2] text-white px-12 rounded-full"
                    : "bg-white btn text-[#9538E2] px-12 rounded-full"
                }`}
              >
                WishList
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isActive.cart ? <Cart></Cart> : <Wishlist></Wishlist>}
    </div>
  );
};

export default DashBoardHeader;
