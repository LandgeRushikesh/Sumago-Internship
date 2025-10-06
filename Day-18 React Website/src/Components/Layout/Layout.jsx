import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800">
      <header className="w-full sticky top-0 z-30">
        <Navbar />
      </header>
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
