import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/Logo.png";
import logoGoogle from "../../assets/logos/Logo-Google.png";
import { LabelInput } from "./LabelInput";
import { loginUser } from "../../features/user/userApi";
import { useAuth } from "../../context/AuthContext";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const user = await loginUser({ username, password });
      login(user); // simpan user ke context
      navigate("/"); // redirect ke halaman utama
    } catch (err) {
      setError("Email atau password salah");
    }
  };

  return (
    <section className="bg-[#181a1c9b] p-8 rounded-2xl text-center w-[90%] max-w-[500px] backdrop-blur-md text-[#e7e3fc] md:w-[500px]">
      <img src={logo} alt="Logo Chill" className="mb-8 mx-auto" />
      <h3 className="text-2xl">Masuk</h3>
      <p className="text-[#e7e3fc6b]">Selamat datang kembali!</p>

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

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="flex justify-between mt-2 text-sm">
          <p className="text-[#e7e3fc6b]">
            Belum punya akun?
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-[#e7e3fc] ml-1 underline"
            >
              Daftar
            </button>
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-8">
          <button
            type="submit"
            className="h-10 flex justify-center items-center gap-2 border border-[#e7e3fc] rounded-full text-[#e7e3fc] text-sm hover:opacity-80 transition bg-[#e7e3fc48]"
          >
            Masuk
          </button>
          <p className="text-[#e7e3fc6b]">Atau</p>

          <button
            type="button"
            className="h-10 flex justify-center items-center gap-2 border border-[#e7e3fc] rounded-full text-[#e7e3fc] text-sm hover:opacity-80 transition bg-transparent"
          >
            <img src={logoGoogle} alt="Google Logo" className="h-5 w-5" />
            <span>Masuk dengan Google</span>
          </button>
        </div>
      </form>
    </section>
  );
};
