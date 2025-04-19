import React, { useState } from "react";
import logo from "../../assets/logos/Logo.png";

export const Footer = () => {
  const [genreOpen, setGenreOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <footer className="bg-[#181a1c] text-[#e7e3fc] flex flex-col md:flex-row justify-between px-4 py-10 sm:px-6 md:px-10">
      {/* Logo + Copyright */}
      <div className="flex flex-col gap-2 items-start justify-center mb-6">
        <img src={logo} alt="Logo" className="w-[100px]" />
        <p className="text-sm opacity-70">@2023 Chill All Rights Reserved.</p>
      </div>

      {/* Collapsible Section for Mobile */}
      <div className="md:hidden flex flex-col gap-4">
        {/* Genre */}
        <div>
          <button
            onClick={() => setGenreOpen((prev) => !prev)}
            className="w-full flex justify-between items-center font-semibold text-left"
          >
            Genre
            <span>{genreOpen ? "▲" : "▼"}</span>
          </button>
          {genreOpen && (
            <div className="mt-2 flex flex-col gap-2 pl-2 opacity-70">
              {[
                "Aksi",
                "Anak-anak",
                "Anime",
                "Britania",
                "Drama",
                "Fantasi",
                "Kejahatan",
                "KDraman",
                "Komedi",
                "Petualangan",
                "Perang",
                "Romantis",
                "Sains",
                "Thriller",
              ].map((item) => (
                <button key={item} className="text-left">
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bantuan */}
        <div>
          <button
            onClick={() => setHelpOpen((prev) => !prev)}
            className="w-full flex justify-between items-center font-semibold text-left"
          >
            Bantuan
            <span>{helpOpen ? "▲" : "▼"}</span>
          </button>
          {helpOpen && (
            <div className="mt-2 flex flex-col gap-2 pl-2 opacity-70">
              {["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"].map(
                (item) => (
                  <button key={item} className="text-left">
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Full Section for Desktop */}
      <div className="hidden md:flex justify-between mt-8 gap-10 lg:gap-36">
        {/* Genre */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Genre</p>
          <div className="flex gap-8">
            {[
              ["Aksi", "Anak-anak", "Anime", "Britania"],
              ["Drama", "Fantasi", "Kejahatan", "KDraman"],
              ["Komedi", "Petualangan", "Perang", "Romantis"],
              ["Sains", "Thriller"],
            ].map((group, index) => (
              <div key={index} className="flex flex-col gap-2 opacity-60">
                {group.map((item) => (
                  <button key={item} className="text-left">
                    {item}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bantuan */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Bantuan</p>
          <div className="flex flex-col gap-2 opacity-60">
            {["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"].map(
              (item) => (
                <button key={item} className="text-left">
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
