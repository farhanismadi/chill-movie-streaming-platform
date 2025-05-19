import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MovieCard } from "../movieImage/MovieCard";
import { FilmPopup } from "../popUp/FilmPopUp";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/movie/movieSlice";

export const MovieCoverCarousel = () => {
  const dispatch = useDispatch();
  const { data: films, isLoading, error } = useSelector((state) => state.movie);
  const carouselRef = useRef(null);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
  };

  const handleClosePopup = () => {
    setSelectedFilm(null);
  };

  if (isLoading) return <p className="p-10">Loading...</p>;
  if (error) return <p className="p-10 text-red-500">Error: {error}</p>;

  return (
    <section className="relative flex flex-col gap-5 overflow-hidden">
      <div className="relative">
        {/* Container gambar */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-hidden scroll-smooth"
        >
          {films.map((film, index) => (
            <div
              key={film.id || index}
              className="flex-shrink-0 w-[300px] flex flex-col items-center cursor-pointer"
              onClick={() => handleFilmClick(film)}
            >
              <MovieCard
                src={film.coverLink}
                alt={film.title || `Film ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Button Prev */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#292b2f] p-3 rounded-full shadow-md"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Button Next */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#292b2f] p-3 rounded-full shadow-md"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Popup */}
        {selectedFilm && (
          <FilmPopup film={selectedFilm} onClose={handleClosePopup} />
        )}
      </div>
    </section>
  );
};
