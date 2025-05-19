import React, { useEffect } from "react";
import { MdInfo, MdVolumeOff } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/movie/movieSlice";

export const Hero = () => {
  const dispatch = useDispatch();
  const { data: movies, isLoading } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (isLoading || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <section
      className="relative h-[700px] bg-no-repeat bg-cover bg-center flex flex-col justify-end px-8 md:px-16 pt-24 pb-12"
      style={{
        backgroundImage: `url(${randomMovie.coverLink})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {randomMovie.title}
        </h1>
        <p className="text-white text-sm md:text-base">
          {randomMovie.description}
        </p>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex flex-row justify-between items-center w-full mt-8 gap-2 sm:gap-4">
        <div className="flex gap-2 sm:gap-4">
          <button className="bg-blue-900 text-white rounded-full py-2 px-4 sm:py-2 sm:px-6 text-xs sm:text-sm font-semibold hover:bg-blue-800 transition">
            Mulai
          </button>
          <button className="flex items-center gap-1 sm:gap-2 bg-gray-800 text-white rounded-full py-2 px-4 sm:py-2 sm:px-6 text-xs sm:text-sm font-semibold hover:bg-gray-700 transition">
            <MdInfo className="text-base sm:text-lg" />
            <span>Selengkapnya</span>
          </button>
          <button className="border border-gray-300 text-white rounded-full py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm hover:bg-white hover:text-gray-800 transition">
            {randomMovie.ageLimit}+
          </button>
        </div>

        <button className="border border-gray-300 text-white rounded-full p-2 hover:bg-white hover:text-gray-800 transition">
          <MdVolumeOff className="text-lg sm:text-xl" />
        </button>
      </div>
    </section>
  );
};
