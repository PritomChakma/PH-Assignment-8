import { Link } from "react-router-dom";
const Category = ({ category }) => {
  return (
    <button className="bg-white text-black border border-2 py-2 px-4 rounded text-center">
      <div className="flex flex-col space-y-2 p-4 rounded-xl">
        {category.map((cate) => (
          <Link
            key={cate.category}
            to={`/cards/${cate.category}`}
            className="btn"
          >
            {cate.category}
          </Link>
        ))}
      </div>
    </button>
  );
};

export default Category;
