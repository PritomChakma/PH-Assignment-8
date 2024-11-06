import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="md:w-11/12 mx-auto mt-5 ">
      <div className="navbar bg-[#9538E2] text-white rounded-t-xl">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              <Link to="/">Home</Link>
              <Link to="/statistics">Statistics</Link>
              <Link to="/dashboard">Dashboard</Link>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 font-bold gap-5">
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/dashboard">Dashboard</Link>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-5 mr-5">
          <div>
            <Link to="/cart" className="fa-solid fa-cart-shopping"></Link>
          </div>
          <div>
            <Link to="/wishlist" className="fa-regular fa-heart"></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
