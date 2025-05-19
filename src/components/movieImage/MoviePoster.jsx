import React from "react";

export const MoviePoster = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-cover rounded-lg w-full h-full"
    />
  );
};
