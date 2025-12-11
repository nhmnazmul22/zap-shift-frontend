import { Outlet } from "react-router";
import Footer from "../../pages/Shared/Footer/Footer.jsx";
import Navbar from "../../pages/Shared/Navbar/Navbar.jsx";

const RootLayout = () => {
  return (
    <div className="max-w-[1500px] max-sm:px-4 mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
