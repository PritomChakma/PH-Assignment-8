import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [category, setCategory] = useState([]);
  const [products, setproducts] = useState([]);
  const [temProducts, setTemProducts] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        setTemProducts(data);
      });
  }, []);

  const handleFilter = (name) => {
    if (name==="All") {
      setproducts(temProducts);
    }else{
      const filteredProducts = temProducts.filter((p) => p.category === name);
      setproducts(filteredProducts);
    }
  };

  return (
    <div className="md:w-11/12 mx-auto gap-4 md:flex ">
      <div className="md:w-2/12">
        <div className="grid grid-cols-3 p-3 md:grid-cols-1 gap-5">
          {category.map((c, i) => (
            <button
              onClick={() => handleFilter(c.category)}
              key={i + 1}
              className="btn  border-[#9538E2] font-bold text-[#9538E2] capitalize"
            >
              {c.category}
            </button>
          ))}
        </div>
      </div>

      <div className="md:w-9/12 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map((p, i) => (
            <div key={i + 1} className="">
              <div className="card card-compact bg-base-100  shadow-xl h-96">
                <figure className="h-48 px-3">
                  <img className="h-52 md:h-60" src={p.product_image} alt="product" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{p.product_title}</h2>
                  <p>
                    <span className="font-bold">Price: </span>$ {p.price}
                  </p>
                  <div className="card-actions justify-center">
                    <Link
                      className="btn text-[#9538E2]  border-[#9538E2]"
                      to={`/details/${p.product_id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
