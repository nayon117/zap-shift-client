import { Outlet } from "react-router";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto bg-accent px-4 md:px-8 lg:px-12">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default RootLayout;
