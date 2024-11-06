import toast from "react-hot-toast";
// get all product from local storage
const getAllCart = () => {
  const all = localStorage.getItem("cart");
  if (all) {
    const cart = JSON.parse(all);
    return cart;
  } else {
    console.log([]);
    return [];
  }
};

// add a product to a local storage
const addCart = (data) => {
  const cart = getAllCart();
  const isExist = cart.find((item) => item.product_id == data.product_id);
  if (isExist) {
    return toast.error("This product already exist!");
  }

  cart.push(data);
  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Successfully added!");
};

// remove all cart
const removeAllCart = ()=> {
  localStorage.setItem("cart", JSON.stringify([]));
  toast.success("Successfully removed!");
}

// remove a product from local storage
const removeCart = (data) => {
  const cart = getAllCart();
  const remaining = cart.filter((item) => item.product_id !== data.product_id);
  localStorage.setItem("cart", JSON.stringify(remaining));
  toast.success("Successfully removed!");
};

//  favourite

const getAllFavourite = () => {
  const all = localStorage.getItem("favourite");
  if (all) {
    const cart = JSON.parse(all);
    return cart;
  } else {
    return [];
  }
};

const addFavourite = (data) => {
  const cart = getAllFavourite();
  const isExist = cart.find((item) => item.product_id == data.product_id);
  if (isExist) {
    return toast.error("This product already exist!");
  }
  cart.push(data);
  localStorage.setItem("favourite", JSON.stringify(cart));
  toast.success("Successfully added!");
};

const removeFavourite = (data) => {
  const cart = getAllFavourite();
  const remaining = cart.filter((item) => item.product_id !== data.product_id);
  localStorage.setItem("favourite", JSON.stringify(remaining));
  toast.success("Successfully removed!");
};

export {
  addCart,
  addFavourite,
  getAllCart,
  getAllFavourite,
  removeCart,
  removeFavourite,
  removeAllCart
};
