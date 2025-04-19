import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MdKeyboardArrowDown,
  MdLogout,
  MdPerson,
  MdStar,
} from "react-icons/md";
import logo from "../../assets/logos/Logo.png";
import { useAuth } from "../../context/AuthContext"; // sesuaikan path

export const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const { user, logout } = useAuth();

  const profilePicture =
    user?.profilePicture || "https://via.placeholder.com/150"; // fallback img

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#181a1c] flex justify-between items-center px-6 h-[50px] z-50 sm:px-6 sm:h-[60px] md:px-10">
      {/* Menu Kiri */}
      <div className="flex items-center gap-5 sm:gap-10 md:gap-[70px]">
        <img
          src={logo}
          alt="Logo Chill"
          className="w-[60px] sm:w-[80px] md:w-[100px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <button
          type="button"
          onClick={() => navigate("/series")}
          className="text-[#e7e3fc] no-underline hover:opacity-80 text-sm sm:text-base bg-transparent border-none cursor-pointer"
        >
          Series
        </button>
        <button
          type="button"
          onClick={() => navigate("/film")}
          className="text-[#e7e3fc] no-underline hover:opacity-80 text-sm sm:text-base bg-transparent border-none cursor-pointer"
        >
          Film
        </button>

        <button
          type="button"
          onClick={() => navigate("/my-list")}
          className="text-[#e7e3fc] no-underline hover:opacity-80 text-sm sm:text-base bg-transparent border-none cursor-pointer"
        >
          Daftar Saya
        </button>
      </div>

      {/* Profile Kanan */}
      <div className="flex items-center gap-1 sm:gap-2">
        <img
          src={
            profilePicture ||
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
          }
          alt="Profile-Picture"
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-cover"
        />
        <button
          type="button"
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="text-[#e7e3fc] flex items-center"
        >
          <MdKeyboardArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>
      {dropdownOpen && (
        <div className="absolute right-0 top-12 w-48 bg-[#181a1c] rounded-sm shadow-lg text-white z-50">
          <ul className="py-2">
            <li
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#3a3b3e] cursor-pointer"
              onClick={() => {
                navigate("/profile");
                setDropdownOpen(false);
              }}
            >
              <MdPerson />
              Profil Saya
            </li>
            <li
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#3a3b3e] cursor-pointer"
              onClick={() => {
                navigate("/upgrade");
                setDropdownOpen(false);
              }}
            >
              <MdStar />
              Ubah Premium
            </li>
            <li
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#3a3b3e] cursor-pointer"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              <MdLogout />
              Keluar
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
