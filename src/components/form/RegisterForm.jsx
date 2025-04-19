import React, { useState } from "react";
import logo from "../../assets/logos/Logo.png";
import logoGoogle from "../../assets/logos/Logo-Google.png";
import { LabelInput } from "./LabelInput";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setError("Kata sandi tidak cocok");
      return;
    }

    try {
      const response = await api.get("/user");
      const users = response.data;

      const usernameTaken = users.some((u) => u.username === username);
      if (usernameTaken) {
        setError("Username sudah digunakan");
        return;
      }

      // Tambah user baru, tapi tidak login
      await api.post("/user", { username, password });

      // Arahkan ke halaman login
      navigate("/login");
    } catch (err) {
      setError("Gagal mendaftar");
    }
  };

  return (
    <section className="bg-[#181a1c9b] p-8 rounded-2xl text-center w-[90%] max-w-[500px] backdrop-blur-md text-[#e7e3fc] md:w-[500px]">
      <img src={logo} alt="Logo Chill" className="mb-8 mx-auto" />
      <h3 className="text-2xl">Daftar</h3>
      <p className="text-[#e7e3fc6b]">Buat akun baru kamu</p>

      <form onSubmit={handleSubmit}>
        <LabelInput
          label="Username"
          placeholder="Masukan username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LabelInput
          label="Kata Sandi"
          type="password"
          placeholder="Masukan kata sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LabelInput
          label="Konfirmasi Kata Sandi"
          type="password"
          placeholder="Masukan kata sandi"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="flex justify-between mt-2 text-sm">
          <p className="text-[#e7e3fc6b]">
            Sudah punya akun?
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-[#e7e3fc] ml-1 underline"
            >
              Masuk
            </button>
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-8">
          <button
            type="submit"
            className="h-10 flex justify-center items-center gap-2 border border-[#e7e3fc] rounded-full text-[#e7e3fc] text-sm hover:opacity-80 transition bg-[#e7e3fc48]"
          >
            Daftar
          </button>
          <p className="text-[#e7e3fc6b]">Atau</p>

          <button
            type="button"
            className="h-10 flex justify-center items-center gap-2 border border-[#e7e3fc] rounded-full text-[#e7e3fc] text-sm hover:opacity-80 transition"
          >
            <img src={logoGoogle} alt="Google Logo" className="h-5 w-5" />
            <span>Daftar dengan Google</span>
          </button>
        </div>
      </form>
    </section>
  );
};
