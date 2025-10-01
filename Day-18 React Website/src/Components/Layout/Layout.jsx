import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-800">
      <header className="w-full">
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
