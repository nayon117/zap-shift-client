import { Outlet } from "react-router";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto bg-accent">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default RootLayout;
