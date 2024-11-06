import { useEffect, useState } from "react";
import { getAllCart, removeCart, removeAllCart } from "../Utility/indx";
import group from "../assets/Group.png";
const Cart = () => {
  const [product, setProduct] = useState([]);
  const totalAmount = product.reduce(
    (total, product) => total + product.price,
    0
  );
  // console.log(totalAmount);

  useEffect(() => {
    const cart = getAllCart();
    setProduct(cart);
  }, []);

  const handleRemove = (data) => {
    removeCart(data);
    const cart = getAllCart();
    setProduct(cart);
  };
  const handleRemoveCart = () => {
    removeAllCart();
    setProduct([]);
  };
  const handleSort = () => {
    const sortItem = product.sort((a, b) => b.price - a.price);
    setProduct([...sortItem]);
  };
  return (
    <div>
      <div className="flex justify-between w-10/12 mx-auto items-center my-10">
        <div>
          <h1 className="text-3xl font-bold  ">Cart</h1>
        </div>
        <div className="md:flex gap-12 md:items-center">
          <h1 className="text-xl font-bold">
            Total Cost : ${Math.round(totalAmount)}
          </h1>
          <button
            onClick={handleSort}
            className="px-8 btn text-[#9538E2] border-2 rounded-full border-[#9538E2]"
          >
            Short by Price
          </button>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className=" px-8 btn text-white border-2 rounded-full bg-[#9538E2]"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Purchase
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box text-center">
              <div className="flex justify-center">
                <img src={group} alt="" />
              </div>
              <h3 className="font-bold text-xl mt-3">Payment Successfully</h3>
              <p className="py-4">Thanks for purchasing.</p>
              <p>
                {" "}
                <span className="font-bold">
                  Total: ${Math.round(totalAmount)}
                </span>
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    onClick={handleRemoveCart}
                    className="btn bg-[#9538E2] text-white"
                  >
                    OK
                  </button>
                </form>
              </div>
            </div>
          </dialog>

          {/* <button className="px-8 btn text-white border-2 rounded-full bg-[#9538E2]">
            Purchase
          </button> */}
        </div>
      </div>

      {product.map((p, i) => (
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

export default Cart;
