import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { MdOutlinePhotoCamera } from "react-icons/md";

export const ProfileInfo = () => {
  const { user, updateUser, deleteUser } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
    profilePicture: user?.profilePicture || "",
  });

  const [editField, setEditField] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    updateUser(formData); // pastikan fungsi ini sesuai konteks
    setEditField(null);
  };

  const handleDelete = () => {
    deleteUser(); // pastikan fungsi ini tersedia di context
    setShowPopup(false);
  };

  return (
    <div className="max-w-md  text-[#e7e3fc]">
      {/* Foto Profil */}
      <div className="flex gap-5 mb-6">
        <img
          src={
            formData.profilePicture ||
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
          }
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex items-center gap-2">
          <MdOutlinePhotoCamera className="text-xl" />
          <input
            type="text"
            placeholder="URL foto profil"
            className="bg-[#1f1f1f] text-sm px-3 py-1 rounded w-full"
            value={formData.profilePicture}
            onChange={(e) =>
              handleInputChange("profilePicture", e.target.value)
            }
          />
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-5">
        {["name", "email", "password"].map((field) => (
          <div key={field} className="relative">
            <label className="text-xs absolute left-3 top-[-10px] bg-[#181a1c] px-1 text-gray-400">
              {field === "name"
                ? "Nama Pengguna"
                : field === "email"
                ? "Email"
                : "Sandi"}
            </label>
            <input
              type={field === "password" ? "password" : "text"}
              className="bg-[#1f1f1f] w-full px-3 py-2 pr-10 rounded text-sm"
              value={formData[field]}
              disabled={editField !== field}
              onChange={(e) => handleInputChange(field, e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-400"
              onClick={() => setEditField(field)}
            >
              <FiEdit2 />
            </button>
          </div>
        ))}
      </div>

      {/* Tombol Aksi */}
      <div className="flex gap-4 mt-8">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-xl"
          onClick={handleSave}
        >
          Simpan
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-xl flex items-center gap-2"
          onClick={() => setShowPopup(true)}
        >
          <FiTrash2 />
          Hapus Akun
        </button>
      </div>

      {/* Popup Konfirmasi */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-[#1f1f1f] text-[#e7e3fc] px-6 py-4 rounded shadow-md text-center">
            <p className="mb-4">Apakah kamu yakin ingin menghapus akun?</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
                onClick={() => setShowPopup(false)}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                onClick={handleDelete}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
