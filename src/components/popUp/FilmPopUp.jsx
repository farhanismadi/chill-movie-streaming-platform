import React, { useEffect, useState } from "react";

export const FilmPopup = ({ film, onClose }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (film) {
      const savedList = JSON.parse(localStorage.getItem("myList")) || [];
      const exists = savedList.some((item) => item.id === film.id);
      setIsSaved(exists);
    }
  }, [film]);

  const handleSaveOrRemove = () => {
    const savedList = JSON.parse(localStorage.getItem("myList")) || [];

    if (isSaved) {
      // Hapus dari daftar
      const updatedList = savedList.filter((item) => item.id !== film.id);
      localStorage.setItem("myList", JSON.stringify(updatedList));
      setIsSaved(false);
    } else {
      // Tambahkan ke daftar
      savedList.push(film);
      localStorage.setItem("myList", JSON.stringify(savedList));
      setIsSaved(true);
    }
  };

  if (!film) return null;

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black/60 z-50 p-4">
      <div className="bg-[#292b2f] rounded-2xl p-4 flex flex-col items-center gap-4 relative shadow-2xl max-w-[90%]">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-300 hover:text-white text-2xl"
        >
          ×
        </button>

        {/* Gambar cover (pakai coverLink dari API) */}
        <img
          src={film.coverLink}
          alt={film.title}
          className="rounded-xl object-contain max-h-[80vh] w-auto"
        />

        {/* Judul */}
        <h2 className="text-lg font-bold text-center text-white">
          {film.title}
        </h2>

        {/* Tombol Tambahkan / Hapus */}
        <button
          onClick={handleSaveOrRemove}
          className="bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold px-4 py-2 rounded-full transition"
        >
          {isSaved ? "✓ Sudah Disimpan" : "+ Tambahkan ke Daftar Saya"}
        </button>
      </div>
    </div>
  );
};
