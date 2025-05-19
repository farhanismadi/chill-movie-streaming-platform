import React from "react";
import { MovieCoverCarousel } from "../carousel/MovieCoverCarousel";
import { MoviePosterCarousel } from "../carousel/MoviePosterCarousel";

export const HomepageContent = () => {
  return (
    <div className="flex gap-9 flex-col p-10 text-2xl font-semibold text-white">
      <div>
        <h2 className="mb-4">Melanjutkan Tonton Film</h2>
        <MovieCoverCarousel />
      </div>
      <div>
        <h2 className="mb-4">Top Rating Film dan Series Hari ini</h2>
        <MoviePosterCarousel />
      </div>
      <div>
        <h2 className="mb-4">Film Trending</h2>
        <MoviePosterCarousel />
      </div>
      <div>
        <h2 className="mb-4">Rilis Baru</h2>
        <MoviePosterCarousel />
      </div>
    </div>
  );
};
