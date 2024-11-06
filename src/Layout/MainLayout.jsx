import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "./../components/Footer";
import NavBar from "./../components/NavBar";
const MainLayout = () => {
  return (
    <div>
      <Toaster />
      {/* NavBar */}
      <NavBar></NavBar>
      {/* Dynamic section */}
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </div>
      {/* Footer  */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
