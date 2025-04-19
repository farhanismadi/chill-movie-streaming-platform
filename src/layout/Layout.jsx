import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#181a1c]">
      {/* Navbar tetap di atas */}
      <Navbar />

      {/* Konten di tengah, fleksibel */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Footer tetap di paling bawah */}
      <Footer />
    </div>
  );
};
