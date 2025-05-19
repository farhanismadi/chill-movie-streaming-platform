import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FilmPopup } from "../popUp/FilmPopUp";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/movie/movieSlice";
import { MoviePoster } from "../movieImage/MoviePoster";

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const MoviePosterCarousel = () => {
  const dispatch = useDispatch();
  const { data: films, isLoading, error } = useSelector((state) => state.movie);
  const carouselRef = useRef(null);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [shuffledFilms, setShuffledFilms] = useState([]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // Shuffle films setiap films berubah
  useEffect(() => {
    if (films && films.length > 0) {
      setShuffledFilms(shuffleArray(films));
    }
  }, [films]);

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
          {shuffledFilms.map((film, index) => (
            <div
              key={film.id || index}
              className="flex-shrink-0 w-[300px] flex flex-col items-center cursor-pointer"
              onClick={() => handleFilmClick(film)}
            >
              <MoviePoster
                src={film.posterLink}
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
